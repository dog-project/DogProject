import uuid from "uuid/v4";

var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

export const Candidates = shuffle([
    {
        id: uuid(),
        content: 'Sanders',
    },
    {
        id: uuid(),
        content: 'Warren',
    },
    {
        id: uuid(),
        content: 'Biden',
    },
    {
        id: uuid(),
        content: 'Buttigieg',
    },
    {
        id: uuid(),
        content: 'Bloomberg',
    },
    {
        id: uuid(),
        content: 'Klobuchar',
    },

    {
        id: uuid(),
        content: 'Gabbard'
    },

    {
      id: uuid(),
      content: 'Steyer'
    }
]);
