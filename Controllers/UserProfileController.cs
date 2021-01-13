using Gifter.Repositories;
using Gifter.Models;

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
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var allUserProfiles = _userProfileRepository.GetAll();
            return Ok(allUserProfiles);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var userProfile = _userProfileRepository.GetById(id);

            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
       
        [HttpPost]
        public IActionResult Add(UserProfile userProfile)
        {
            userProfile.DateCreated = DateTime.UtcNow;

            _userProfileRepository.Add(userProfile);
            return Ok(userProfile);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, UserProfile userProfile)
        {
            if (id != userProfile.Id)
            {
                return BadRequest();
            }

            var existingUser = _userProfileRepository.GetById(id);

            if (existingUser == null)
            {
                return NotFound();
            }

            _userProfileRepository.Update(userProfile);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var userProfile = _userProfileRepository.GetById(id);

            if (userProfile == null)
            {
                return NotFound();
            }
            _userProfileRepository.Delete(id);
            return NoContent();
        }
    }
}
