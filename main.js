var ex = {
	exercises: [],
	doneCount: -1,
	skipCount: 0,

	done: function () {
		this.incCount (true);
		this.showNext();
	},

	skip: function () {
		this.incCount (false);
		this.showNext();
	},

	incCount: function (wasDone) {
		this.doneCount += wasDone ? 1 : 0;
		this.skipCount += !wasDone ? 1 : 0;
		this.showStats();		
	},

	start: function () {
		this.doneCount = 0;
		this.skipCount = 0;
		$(".hideWhenNoEx").show();
		$(".hideWhenEx").hide();
		this.showNext(true);
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
		for (var i=0; i < 20; i++) {
			window.setTimeout (function() {
				console.log ("showing");
				var nextExercise = ex.getNext();
				$(".exercise").html (nextExercise.exercise);
				$(".reps").html (''+nextExercise.reps + ' reps');		
			}, i*50);
		}
	},

	showStats: function () {
		$(".counter").html("Completed Sets: " + this.doneCount);
		$(".skips").html("Skipped: " + this.skipCount);

	},

	end: function () {
		alert ("You completed: " + this.doneCount + " and skipped: " + this.skipCount);
		this.doneCount = 0;
		this.skipCount = 0;
		this.showStats();
		$(".hideWhenNoEx").hide();
		$(".hideWhenEx").show();
	}
};

ex.exercises.push ({name: "Situps", max: 30});
ex.exercises.push ({name: "Pushups", max: 20});
ex.exercises.push ({name: "Squats", max: 10});

