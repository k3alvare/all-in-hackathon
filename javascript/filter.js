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

// Function to display posts in the list

function displayReports() {
  let reportsList = document.getElementById("incidents-list");
  reportsList.innerHTML = "";
  for (let i = 0; i < reports.length; i++) {
    let report = reports[i];
    let li = document.createElement("li");
	if(report.incidentType == "theft")
		li.innerHTML = `<p>${report.incidentType}</p>`;
    li.innerHTML = `<p>${report.incidentType}</p><p>${report.incidentDate}</p><p>${report.incidentSummary}</p>`;
    reportsList.appendChild(li);
  }
  saveReportsToLocalStorage();
}

displayReports();
