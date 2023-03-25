let reports = [
  {
    incidentType: "Burglary",
    incidentDate: "03/25/2023",
    incidentSummary: "Robber took my phone!",
  },
];

if (localStorage.getItem("reports")) {
  reports = JSON.parse(localStorage.getItem("reports"));
}

// Function to save incident reports to localStorage

function saveReportsToLocalStorage() {
  localStorage.setItem("reports", JSON.stringify(reports));
}

// Function to display posts in the list

function displayReports() {
  let reportsList = document.getElementById("incidents-list");
  reportsList.innerHTML = "";
  for (let i = 0; i < reports.length; i++) {
    let report = reports[i];
    let li = document.createElement("li");
    li.innerHTML = `<p>${report.incidentType}</p><p>${report.incidentDate}</p><p>${report.incidentSummary}</p>`;
    reportsList.appendChild(li);
  }
  saveReportsToLocalStorage();
}

displayReports();

// Function to handle report submission

function handleReportPost(event) {
  event.preventDefault();

  const incidentDate = document.getElementById("incident-date").value;
  const incidentSummary = document.getElementById("incident-summary").value;

  const incidentTypes = [
    { id: "type-burglary", name: "Burglary" },
    { id: "type-theft", name: "Theft" },
    { id: "type-sexual-assault", name: "Sexual Assault" },
    { id: "type-other", name: "Other" },
  ];

  const incidentType =
    incidentTypes.find((type) => document.getElementById(type.id).checked)?.name || "Unknown";
  reports.push({
    incidentType: incidentType,
    incidentDate: incidentDate,
    incidentSummary: incidentSummary,
  });

  const newReport = {
    incidentType: incidentType,
    incidentDate: incidentDate,
    incidentSummary: incidentSummary,
  };

  reports.push(newReport);
  displayReports();
}

// Event Listern for report submission
const form = document.getElementById("template-post");
form.addEventListener("submit", handleReportPost);
