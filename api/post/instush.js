  export const story = [{
    "_id": "s101",
    "txt": "Best trip ever",
    "imgUrl": "https://res.cloudinary.com/demo/image/upload/l_text:Arial_100_bold:San%20Fransisco/l_text:Arial_100:%7C/g_west,fl_layer_apply,x_w_add_20/l_text:Arial_100_italic:62%C2%B0F/g_west,fl_layer_apply,x_w_add_20/photo-1430609098125-581618d0482f_xvayby", //Can be an array if decide to support multiple imgs
    "createdAt": 123543452,
    "by": {
      "_id": "u102",
      "fullname": "Tom Cohen",
      "imgUrl": "https://res.cloudinary.com/demo/image/upload/pg_10/bored_animation.jpg"
    },
    "loc": {
      "lat": 11.11,
      "lng": 22.22,
      "name": "Tel Aviv"
    },
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
          }
        ]
      },
      {
        "id": "c1002",
        "by": {
          "_id": "u106",
          "fullname": "Dob",
          "imgUrl": "http://some-img"
        },
        "txt": "not good!",
      }
    ],
    "likedBy": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      }
    ],
    "tags": ["fun", "kids"]
  }, {
    "_id": "s102",
    "txt": "Best t22222rip ever",
    "imgUrl": "https://res.cloudinary.com/demo/image/upload/e_sepia:50/coast.jpg", //Can be an array if decide to support multiple imgs
    "createdAt": 123543452,
    "by": {
      "_id": "u101",
      "fullname": "Ulash Ulashi",
      "imgUrl": "https://res.cloudinary.com/demo/image/upload/pg_10/bored_animation.jpg"
    },
    "loc": {
      "lat": 11.11,
      "lng": 22.22,
      "name": "Tel Aviv"
    },
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
          },
        ]
      },
      {
        "id": "c1002",
        "by": {
          "_id": "u106",
          "fullname": "Dob",
          "imgUrl": "http://some-img"
        },
        "txt": "not good!",
      },
      {
        "by": {
          "fullname": "Bob",
        },
        "txt": "good o2ne!",
      }
    ],
    "likedBy": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      },
      {
    "id": "c1001",
    "by": {
      "_id": "u105",
      "fullname": "Bob",
      "imgUrl": "http://some-img"
    },
    "txt": "good one!",
    "likedBy": [ // Optional
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
    ]
  }
    ],
    
    "tags": ["fun", "kids"]
  },
]



 const userData = () => {
  return [{
    "_id": "u102",
    "username": "Muko",
    "password": "mukmuk",
    "fullname": "Muki Muka",
    "imgUrl": "https://res.cloudinary.com/demo/image/upload/pg_10/bored_animation.jpg",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      }
    ],
    "followers": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      }
    ],
    "savedStoryIds": ["s104", "s111", "s123"]
  }, {
    "_id": "u101",
    "username": "Muko",
    "password": "mukmuk",
    "fullname": "Muki Muka",
    "imgUrl": "https://res.cloudinary.com/demo/image/upload/pg_10/bored_animation.jpg",
    "createdAt": 123543452,
    "following": [
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      }
    ],
    "followers": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      }
    ],
    "savedStoryIds": ["s104", "s111", "s123"]

  }]
}

module.exports = story