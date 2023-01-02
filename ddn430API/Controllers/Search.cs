using Common.Model;
using ddn430API.Db;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ddn430API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Search : ControllerBase
    {

        [HttpPost(Name = "PostSearchInfo")]
        public string Post(SearchInformation searchInfo)
        {
            var db = new AddSearchInformation();
            string statusMessage;
            try
            {
                var result = db.ExcecuteQuery(searchInfo);
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