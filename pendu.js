var Pendu = function () {
  var that = this;
  var counter = document.getElementById('count');
  var input = document.getElementById('lol');
  var letters_holder = document.getElementById('letters');
  this.letters;
  var counter_start = 11;
  var words = ['peste', 'imitateur', 'empreinte', 'quadrupède', 'panier'];
  var guesses = [];
  this.word;

    this.getRandomArbitrary = function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

  var check_the_word = function (letter) {
    var places = [];
    for (var i = 0; i < words.length; i++) {
        if (that.word[i] === letter) {
            places.push(letter);
        }
    }

    return places;
  };

  var remove_point = function () {
    display_chances();
  };

  var place_the_letter = function (letter, places) {
    places.forEach(function (t, p) {
        that.letters[t].innerHTML = letter;

    });
  };

  var check_the_input = function() {
    return input.value;
  };

  var validate_letter = function (text) {
    if (text.length === 1) {
        if (guesses.indexOf(text) === -1) {
            guesses.push(text);

            return true
        } else {

            return 'already dood';
        }
    }

    return false;
  };

  var trigger = function(keydown) {
    if (keydown.keyCode === 13) {
        var letter = check_the_input();
        var is_good = validate_letter(letter)
        if (true === is_good) {
            var places = check_the_word(letter);
            if (places.length > 0) {
                place_the_letter(letter, places);
            } else {
                alert('This letter is not in my word :/');
                remove_point();
            }
        } else if ('already dood' === is_good) {
            alert('You already picked this letter...')
        } else {
            alert('YOU MUST CHOOSE ONE LETTER BRUH !!!');
        }
    }
  };

  var enable_input = function () {
    window.addEventListener('keydown', trigger)
  };

  var display_chances = function () {
      if (--counter_start > 0) {
          counter.innerHTML = counter_start;
      } else {
          window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      }
  };

  var display_underscores = function() {
    var word_length = that.word.length;
    for (var i = 0; i < word_length; i++) {
        var span = document.createElement('span');
        span.classList.add('blank');
        span.innerHTML = "_";
        letters_holder.appendChild(span);
    }
    that.letters = document.getElementsByClassName('blank');
  };

  var initialize_pendu = function () {
    that.word = words[that.getRandomArbitrary(0, words.length)];
    console.log(that.word);
    display_chances();
    enable_input();
    //enable_counter();
    display_underscores();
  };

  return {
      init : function () {
          initialize_pendu();
      }
  }
};
window.pendu = new Pendu();


// https://youtu.be/oTyNVLlFiys?t=10s