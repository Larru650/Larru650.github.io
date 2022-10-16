import { QuestionSetScriptParserPackages } from '@avantia/questionset-script-parser';
import { v4 as uuid } from 'uuid';
import { checkVersions, WebsitePackages } from './verifyPackageVersions';

describe('verifyPackageVersions', () => {
  describe('checkVersions', () => {
    it('returns [] when all packages match', () => {
      // arrange
      const adfsFacade = uuid();
      const clientAndServerUtilities = uuid();
      const formValidation = uuid();
      const questionSetModel = uuid();
      const questionSetScriptParser = uuid();
      const serverBase = uuid();
      const directDependencies: WebsitePackages = {
        adfsFacade,
        clientAndServerUtilities,
        formValidation,
        questionSetModel,
        questionSetScriptParser,
        serverBase
      };

      const packageDependencies: QuestionSetScriptParserPackages = {
        clientAndServerUtilities,
        formValidation,
        questionSetModel
      };

      // act/assert
      expect(checkVersions(directDependencies, 'name', packageDependencies)).toStrictEqual([]);
    });

    it('returns an array of errors when some packages do not match', () => {
      // arrange
      const name = 'otherPackage';
      const adfsFacade = uuid();
      const clientAndServerUtilities = uuid();
      const formValidation = uuid();
      const questionSetModel = uuid();
      const questionSetScriptParser = uuid();
      const serverBase = uuid();
      const otherFormValdation = uuid();
      const otherQuestionSetModel = uuid();

      const directDependencies: WebsitePackages = {
        adfsFacade,
        clientAndServerUtilities,
        formValidation,
        questionSetModel,
        questionSetScriptParser,
        serverBase
      };

      const packageDependencies: QuestionSetScriptParserPackages = {
        clientAndServerUtilities,
        formValidation: otherFormValdation,
        questionSetModel: otherQuestionSetModel
      };

      // act
      const errors = checkVersions(directDependencies, name, packageDependencies);

      // assert
      expect(errors.length).toBe(2);
      expect(errors[0]).toContain("The 'formValidation' dependency references different versions. This project uses");
      expect(errors[0]).toContain(` '${name}' uses `);
      expect(errors[1]).toContain("The 'questionSetModel' dependency references different versions. This project uses");
      expect(errors[1]).toContain(` '${name}' uses `);
    });
  });
});
