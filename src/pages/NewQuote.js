import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = quoteData => {
        console.log(quoteData, history);

        history.push('/quotes');
        console.log(history);
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    );
}

export default NewQuote;