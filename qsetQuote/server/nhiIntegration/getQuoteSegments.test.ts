import { HpDebugFlags, setDebugFlags } from '@avantia/questionset-model';
import { getQuoteSegment, removeProperties } from './getQuoteSegments';
import { getQuote } from './saveQuestionSet';

describe('get quote segments (integration test)', () => {
  const quoteGuid = '5dbba5d4-a40e-4e35-ac09-6f9df18d61ab';
  const qabQuoteGuid = 'deae8b6c-b0bd-473c-8845-941bb8b53f2e';

  it('removeProperties works', () => {
    // arrange
    const objectToRemovePropertiesFrom: any = {
      name: 'James',
      age: 18,
      id: '1233-2323-23129',
      hobbies: [
        {
          type: 'Football',
          frequency: 3,
          id: 10
        },
        {
          type: 'Hockey',
          frequency: 1,
          id: 10
        }
      ]
    };

    // act
    removeProperties(objectToRemovePropertiesFrom, ['frequency', 'id']);
    const expectedObject: any = {
      name: 'James',
      age: 18,
      hobbies: [
        {
          type: 'Football'
        },
        {
          type: 'Hockey'
        }
      ]
    };

    //assert
    expect(objectToRemovePropertiesFrom).toStrictEqual(expectedObject);
  });

  it('YourDetails returns the same values when comparing the q&b result to the new platform one', (done) => {
    // arrange
    setDebugFlags(HpDebugFlags.None);
    const propertiesToRemove = ['QuoteRefNo', 'QuoteGuid', 'Instance', 'NickName'];
    // act
    getQuoteSegment('YourDetails', quoteGuid)
      .then((yourDetails) => {
        // assert
        expect(yourDetails).toBeTruthy();

        getQuoteSegment('YourDetails', qabQuoteGuid).then((qabYourDetails) => {
          // arrange
          removeProperties(yourDetails, propertiesToRemove);
          removeProperties(qabYourDetails, propertiesToRemove);

          // assert
          expect(qabYourDetails).toBeTruthy();

          // assert/act
          expect(yourDetails).toStrictEqual(qabYourDetails);
          done();
        });
      })
      .catch((err) => {
        fail(err);
      });
  }, 25000);

  it('YourContents returns the same values when comparing the q&b result to the new platform one', (done) => {
    // arrange
    setDebugFlags(HpDebugFlags.None);
    const propertiesToRemove = ['QuoteRefNo', 'QuoteGuid'];
    // act
    getQuoteSegment('YourContents', quoteGuid)
      .then((yourContents) => {
        // assert
        expect(yourContents).toBeTruthy();
        getQuoteSegment('YourContents', qabQuoteGuid).then((qabYourContents) => {
          // arrange
          removeProperties(yourContents, propertiesToRemove);
          removeProperties(qabYourContents, propertiesToRemove);

          // assert
          expect(qabYourContents).toBeTruthy();

          // assert/act
          expect(yourContents).toStrictEqual(qabYourContents);
          done();
        });
      })
      .catch((err) => {
        fail(err);
      });
  }, 25000);

  it('YourHome returns the same values when comparing the q&b result to the new platform one', (done) => {
    // arrange
    setDebugFlags(HpDebugFlags.None);
    const propertiesToRemove = ['QuoteRefNo', 'QuoteGuid', 'Instance', 'StartDate'];

    // act
    getQuoteSegment('YourHome', quoteGuid)
      .then((yourHome) => {
        // assert
        expect(yourHome).toBeTruthy();

        getQuoteSegment('YourHome', qabQuoteGuid).then((qabYourHome) => {
          // arrange
          removeProperties(qabYourHome, propertiesToRemove);
          removeProperties(yourHome, propertiesToRemove);

          // assert
          expect(qabYourHome).toBeTruthy();

          // assert/act
          expect(yourHome).toStrictEqual(qabYourHome);
          done();
        });
      })
      .catch((err) => {
        fail(err);
      });
  }, 25000);

  it('CalculateQuotePremium returns the same values when comparing the q&b result to the new platform one', (done) => {
    // arrange
    setDebugFlags(HpDebugFlags.None);
    const propertiesToRemove = ['QuoteRefNo', 'QuoteGuid', 'Instance', 'StartDate', 'NickName'];

    // act
    getQuote(quoteGuid).then((quoteResult) => {
      // assert
      expect(quoteResult).toBeTruthy();

      getQuote(qabQuoteGuid)
        .then((qabQuoteResult) => {
          // assert
          expect(qabQuoteResult).toBeTruthy();

          removeProperties(quoteResult, propertiesToRemove);
          removeProperties(qabQuoteResult, propertiesToRemove);

          // assert/act
          expect(quoteResult).toStrictEqual(qabQuoteResult);
          done();
        })
        .catch((err) => {
          fail(err);
        });
    });
  }, 25000);
});
