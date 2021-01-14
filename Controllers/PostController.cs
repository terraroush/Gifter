﻿using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var posts = _postRepository.GetAll();
            return Ok(posts);
        }

        [HttpGet("search")]
        public IActionResult Search(string criterion, bool oldestFirst)
        {
            if (criterion == null)
            {
                return Ok(_postRepository.GetAll());
            }

            var posts = _postRepository.Search(criterion, oldestFirst);
            return Ok(posts);
        }
        [HttpGet("hottest")]
        public IActionResult DateSearch(string since)
        {
            var dt = DateTime.Parse(since);
            return Ok(_postRepository.DateSearch(dt));

        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }
        [HttpGet("getbyuser/{id}")]
        public IActionResult GetByUser(int id)
        {
            return Ok(_postRepository.GetByUserProfileId(id));
        }
        [HttpPost]
        public IActionResult Add(Post post)
        {
            post.DateCreated = DateTime.UtcNow;

            _postRepository.Add(post);
            return Ok(post);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            var exisitingPost = _postRepository.GetById(id);

            if (exisitingPost == null)
            {
                return NotFound();
            }

            _postRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var post = _postRepository.GetById(id);

            if (post == null)
            {
                return NotFound();
            }

            _postRepository.Delete(id);
            return NoContent();
        }

    }
}
