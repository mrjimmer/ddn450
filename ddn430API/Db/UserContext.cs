using Common.Model;
using Microsoft.EntityFrameworkCore;
using System.IO;

namespace ddn430API.Db
{
    public class UserContext : DbContext
    {
        public DbSet<UserInformation> Users { get; set; }
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {        
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

    }
}
