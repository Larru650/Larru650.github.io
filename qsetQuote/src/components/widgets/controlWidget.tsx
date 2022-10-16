export interface ControlWidgetProps {
  id: string;
  label: string;
  control: JSX.Element | JSX.Element[];
  error?: string;
  paddingBottom?: number;
  prependGroup?: boolean;
}

// export const ControlWidget: React.FC<ControlWidgetProps> = ({
//   id,
//   label,
//   control,
//   error,
//   paddingBottom,
//   prependGroup
// }) => {
//   return (
//     <div className="container" id={`${id}-container`}>
//       <div className="panel panel-default">
//         <div className="panel-body">
//           {label && (
//             <div className="row">
//               <h2>{label}</h2>
//             </div>
//           )}
//           <div className="row">
//             <div className={`input-group${prependGroup === false ? '' : '-prepend'}`}>{control}</div>
//           </div>
//           <ErrorWidget error={error} />
//         </div>
//         {paddingBottom && <SpacerWidget height={paddingBottom} />}
//       </div>
//     </div>
//   );
// };
