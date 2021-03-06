this.caseInsensitiveNameSort = function(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
}

this.clubNameToObject = function(clubName, exact) {
  var club = Clubs.findOne({
    name: clubName
  });
  var answer;
  if (club) {
    answer = club;
  } else if (exact) {
    return null;
  } else {
    club = Clubs.findOne({
      name: {
        $regex: clubName,
        $options: 'i'
      }
    }, {
      sort: {
        createdOn: 1
      }
    });
    if (club) {
      answer = club
    } else {
      answer = null;
    }
  }
  return answer;
}

// used in editClub.js
this.clubNameToId = function(clubName, exact) {
  var club = clubNameToObject(clubName, exact);
  if (club) {
    return club._id;
  } else {
    return null
  }
}

this.caseInsensitiveSort = function(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
}