using Common.Model;
using ddn430API.Controllers;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace ddn430API.Db
{
    public class AddUserInformation
    {
        private DbContextOptions<UserContext> _options;
        public AddUserInformation()
        {
            _options = new DbContextOptionsBuilder<UserContext>()
             .UseSqlServer(@"Server=localhost;Database=ddn430;Trusted_Connection=True;")
             .Options;
        }
        public string ExcecuteQuery(UserInformation userInfo)
        {
            var db = new UserContext(_options);
            string statusMessage;
            try
            {
                db.Add(new UserInformation { Name = userInfo.Name, Email = userInfo.Email });
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
