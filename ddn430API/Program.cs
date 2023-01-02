using ddn430API.Db;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext <UserContext> (option =>
    option.UseSqlServer(builder.Configuration.GetConnectionString("DdnDatabase")));
builder.Services.AddDbContext<SearchContext>(option =>
    option.UseSqlServer(builder.Configuration.GetConnectionString("DdnDatabase")));
builder.Services.AddDbContext<ContactContext>(option =>
    option.UseSqlServer(builder.Configuration.GetConnectionString("DdnDatabase")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
