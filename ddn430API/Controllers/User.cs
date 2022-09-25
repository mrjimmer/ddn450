using Common.Model;
using ddn430API.Db;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ddn430API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class User : ControllerBase
    {

        [HttpPost(Name = "PostUserInfo")]
        public string Post(UserInformation userInfo )
        {
            var db = new AddUserInformation();
            string statusMessage;
            try
            {
                var result = db.ExcecuteQuery(userInfo);
                statusMessage = "success";
                return statusMessage;

            }
            catch (Exception ex)
            {
                statusMessage = ex.ToString();
                return statusMessage;
                
            }
        }
    }
}
