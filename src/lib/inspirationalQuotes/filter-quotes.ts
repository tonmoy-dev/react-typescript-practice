import type { Quote } from '../../components/inspirationalQuotes/application';
export type QuoteFilters = {
  content: string;
  source: string;
}
const filterQuotes = (quotes: Quote[], filters: QuoteFilters) => {
  const content = filters.content.toLowerCase();
  const source = filters.source.toLowerCase();

  if (!content && !source) return quotes;

  return quotes.filter((quote) => {
    if (!quote.content.toLowerCase().includes(content)) return false;
    if (source) {
      if (!quote.source) return false;
      if (!quote.source.toLowerCase().includes(source)) return false;
    }
    return true;
  });
};

export default filterQuotes;
