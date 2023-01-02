using Common.Model;
using Microsoft.EntityFrameworkCore;

namespace ddn430API.Db
{
    public class AddContactInformation
    {
        private DbContextOptions<ContactContext> _options;
        public AddContactInformation()
        {
            _options = new DbContextOptionsBuilder<ContactContext>()
             .UseSqlServer(@"Server=localhost;Database=ddn430;Trusted_Connection=True;")
             .Options;
        }
        public string ExcecuteQuery(ContactInformation contactInfo)
        {
            var db = new ContactContext(_options);
            string statusMessage;
            try
            {
                db.Add(new ContactInformation { Name = contactInfo.Name, Address = contactInfo.Address });
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