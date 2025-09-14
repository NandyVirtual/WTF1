const learners = ["Joa", "Edua", "Miria"];

const attendance = {
  "Joa": [],
  "Edua": [],
  "Miria": []
};

function markAttendance(name, isPresent) {
  attendance[name].push(isPresent ? "Present" : "Absent");
}

for (let day = 1; day <= 3; day++) {
  markAttendance("Joa", day !== 2);
  markAttendance("Edua", day === 1);
  markAttendance("Miria", true);
}

function countAttendance(name) {
  const records = attendance[name];
  const presentCount = records.filter(r => r === "Present").length;
  const absentCount = records.filter(r => r === "Absent").length;
  return { presentCount, absentCount };
}

let topStudent = "", maxPresent = 0, mostAbsent = "", maxAbsent = 0;

for (const name of learners) {
  const { presentCount, absentCount } = countAttendance(name);
  if (presentCount > maxPresent) { maxPresent = presentCount; topStudent = name; }
  if (absentCount > maxAbsent) { maxAbsent = absentCount; mostAbsent = name; }
}

console.log("Final Attendance Summary:");
for (const name of learners) {
  const { presentCount, absentCount } = countAttendance(name);
  console.log(`${name}: Present ${presentCount} times, Absent ${absentCount} times`);
}
console.log("Most Present:", topStudent, "with", maxPresent, "days.");
console.log("Most Absent:", mostAbsent, "with", maxAbsent, "days.");
