function main(s) {
  var marks=[];

   for(var i = 0; i < s.length ; i++){
        var grade = s[i];

        if (grade >= 38) {
           //var i = grade;
            var v = 0;
            while ((grade + v) % 5 !== 0) {
                v++;
            }

            if (v < 3) {
                grade += v;
            }
        }
      marks.push(grade);
   }
    return marks;
}

document.write(main([4,73, 68, 38, 33]));
