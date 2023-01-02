using Common.Model;
using Microsoft.EntityFrameworkCore;

namespace ddn430API.Db
{
    public class AddSearchInformation
    {
        private DbContextOptions<SearchContext> _options;
        public AddSearchInformation()
        {
            _options = new DbContextOptionsBuilder<SearchContext>()
             .UseSqlServer(@"Server=localhost;Database=ddn430;Trusted_Connection=True;")
             .Options;
        }
        public string ExcecuteQuery(SearchInformation searchInfo)
        {
            var db = new SearchContext(_options);
            string statusMessage;
            try
            {
                db.Add(new SearchInformation { Item = searchInfo.Item});
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                statusMessage = ex.ToString();
                return statusMessage;
            }
            return "success";
        }
    }
}