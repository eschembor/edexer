var ex = {
	exercises: [],
	doneCount: -1,
	incCount: function() {
		this.doneCount++;
	},
	getNext: function () {
		var numExercises = this.exercises.length,
			selectedReps,
			selectedExercise;
		selectedExercise = this.exercises[Math.floor(Math.random() * numExercises)];
		while (!selectedReps) {
			var selectedReps = Math.floor(Math.random() * selectedExercise.max);
		}
		console.log ("Do: " + selectedExercise.name + " for " + selectedReps + " reps.");
		return ({exercise: selectedExercise.name, reps: selectedReps});
	},

	showNext: function() {
		this.incCount();
		$(".counter").html("Completed Sets: " + this.doneCount);

		for (var i=0; i < 20; i++) {
			window.setTimeout (function() {
				console.log ("showing");
				var nextExercise = ex.getNext();
				$(".exercise").html (nextExercise.exercise);
				$(".reps").html (''+nextExercise.reps + ' reps');		
			}, i*50);
		}
	}
};

ex.exercises.push ({name: "Situps", max: 30});
ex.exercises.push ({name: "Pushups", max: 20});
ex.exercises.push ({name: "Squats", max: 10});

