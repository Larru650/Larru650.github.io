import { SMap } from '@avantia/client-and-server-utilities';
import lodash from 'lodash';

export function applyChanges<ItemT>(existing: ItemT, changes: Partial<ItemT>, moreChanges?: Partial<ItemT>): ItemT {
  return Object.assign({}, existing, changes, moreChanges);
}

export type LeafFunction<LeafT> = (leaf: LeafT) => LeafT;

export interface ApplyInnerChangesOptions {
  copyRootNode?: boolean;
  copyLeafNode?: boolean;
}

export function applyInnerChanges<ItemT, LeafT>(
  item: ItemT,
  childProperties: (string | number)[],
  leaf: LeafT | LeafFunction<LeafT>,
  options?: ApplyInnerChangesOptions
): ItemT {
  const leafIndex = childProperties.length - 1;
  const { copyRootNode = false, copyLeafNode = false } = options || {};
  const root = copyRootNode ? (copyItem(item) as ItemT) : item;
  let node: any = root;

  for (let i = 0; i <= leafIndex; i++) {
    const propName = childProperties[i];
    if (i === leafIndex) {
      if (typeof leaf === 'function') {
        let tmp = node[propName];
        if (copyLeafNode) {
          tmp = copyItem(node[propName]);
        }

        node[propName] = (leaf as LeafFunction<LeafT>)(tmp);
      } else {
        node[propName] = leaf;
      }
    } else {
      const parent = node;
      node = parent[propName];
      if (!node) {
        const validProps = typeof parent === 'object' ? lodash.keys(parent) : [];
        const propMessage = validProps.length > 0 ? ` Valid properties are ["${validProps.join('", "')}"].` : '';
        throw new Error(
          `The path traversal for [${childProperties.join('.')}] failed at [${childProperties
            .slice(0, i + 1)
            .join('.')}]. [${propName}] is undefined.${propMessage}`
        );
      }

      node = copyItem(node);
      parent[propName] = node;
    }
  }

  return root;
}

function copyItem(item: unknown): any[] | SMap<any> {
  if (lodash.isArray(item)) {
    return [...item];
  } else if (typeof item === 'object') {
    return { ...item };
  }

  throw new Error(`Unable to copy items of type '${typeof item}'`);
}
