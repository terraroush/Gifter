using Gifter.Models;
using System;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        Post GetById(int id);
        List<Post> GetByUserProfileId(int id);
        void Update(Post post);
        void Delete(int id);
        void Add(Post post);
        List<Post> Search(string searchTerm, bool oldestFirst);
        List<Post> DateSearch(DateTime date);
    }
}