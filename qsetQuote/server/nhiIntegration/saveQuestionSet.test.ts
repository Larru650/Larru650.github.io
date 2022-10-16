import { HpDebugFlags, setDebugFlags } from '@avantia/questionset-model';
import { configureLogging } from '@avantia/server-base';
import { QuoteAmountsDetail } from './interfaces';
import { getQuote, saveQuestionSet } from './saveQuestionSet';
import { createMockQuestionSet } from './transformSectionTestCommon';

describe('saveQuestionSet (integration test)', () => {
  configureLogging({ debugMode: false, masks: [] });

  it('saves and quotes for a minimally answered but complete question set', (done) => {
    // arrange
    setDebugFlags(HpDebugFlags.TimeTaken | HpDebugFlags.UnitTests);
    const qset = createMockQuestionSet('minimal');

    // act
    saveQuestionSet(qset, false)
      .then((quoteGuid) => {
        console.log(`Quote UUID is ${quoteGuid}`);

        // assert
        expect(quoteGuid).toBeTruthy();

        // act
        getQuote(quoteGuid).then((quote) => {
          // assert
          expect(quote).toBeTruthy();
          const quoteAmounts = quote.QuoteAmounts as QuoteAmountsDetail;
          expect(quoteAmounts).toBeTruthy();
          expect(quoteAmounts.YearlyAmount).toBeGreaterThan(100);
          console.log(`The quote price is £${quoteAmounts.YearlyAmount}`);
          // console.log('Quote response:\n' + JSON.stringify(quote, null, 2));
          done();
        });
      })
      .catch((err) => {
        fail(err);
      });
  }, 30000);

  it('saves and quotes for a fully answered question set', (done) => {
    // arrange
    setDebugFlags(HpDebugFlags.TimeTaken | HpDebugFlags.UnitTests);
    const qset = createMockQuestionSet('full');

    // act
    saveQuestionSet(qset, false)
      .then((quoteGuid) => {
        console.log(`Quote UUID is ${quoteGuid}`);

        // assert
        expect(quoteGuid).toBeTruthy();

        // act
        getQuote(quoteGuid).then((quote) => {
          // assert
          expect(quote).toBeTruthy();
          const quoteAmounts = quote.QuoteAmounts as QuoteAmountsDetail;
          expect(quoteAmounts).toBeTruthy();
          expect(quoteAmounts.YearlyAmount).toBeGreaterThan(100);
          console.log(`The quote price is £${quoteAmounts.YearlyAmount}`);
          // console.log('Quote response:\n' + JSON.stringify(quote, null, 2));
          done();
        });
      })
      .catch((err) => {
        fail(err);
      });
  }, 30000);
});
