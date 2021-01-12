using Gifter.Data;
using Gifter.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Repositories
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserProfile> GetAll()
        {
            return _context.UserProfile
                .ToList();
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile
                .FirstOrDefault(up => up.Id == id);
        }
        //public List<UserProfile> GetByPostId(int id)
        //{
        //    return _context.UserProfile.Include(up => up.Post)
        //                    .Where(up => up.PostId == id)
        //                    .OrderBy(up => up.Title)
        //                    .ToList();
        //}
        public void Add(UserProfile UserProfile)
        {
            _context.Add(UserProfile);
            _context.SaveChanges();
        }

        public void Update(UserProfile userProfile)
        {
            _context.Entry(userProfile).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var userProfile = GetById(id);
            _context.UserProfile.Remove(userProfile);
            _context.SaveChanges();
        }
    }
}
