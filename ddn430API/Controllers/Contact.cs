using Common.Model;
using ddn430API.Db;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ddn430API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Contact : ControllerBase
    {

        [HttpPost(Name = "PostContactInfo")]
        public string Post(ContactInformation contactInfo)
        {
            var db = new AddContactInformation();
            string statusMessage;
            try
            {
                var result = db.ExcecuteQuery(contactInfo);
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