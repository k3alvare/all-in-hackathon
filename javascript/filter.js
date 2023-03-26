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
document.getElementById("filterbutton1").addEventListener("click", filterSelectionB);
document.getElementById("filterbutton2").addEventListener("click", filterSelectionT);
document.getElementById("filterbutton3").addEventListener("click", filterSelectionS);
document.getElementById("filterbutton4").addEventListener("click", filterSelectionO);

// Function to display posts in the list
function filterSelectionB() {
	let reportsList = document.getElementById("incidents-list");
	reportsList.innerHTML = "";
	for (let i = 0; i < reports.length; i++) {
	  let report = reports[i];
	  let li = document.createElement("li");
	  if(report.incidentType == "Burglary")
		li.innerHTML = `<p>${report.incidentType}</p><p>${report.incidentDate}</p><p>${report.incidentSummary}</p>`;
	  if(report.incidentType == "Burglary")
	  reportsList.appendChild(li);

	}
	}
function filterSelectionT() {
	let reportsList = document.getElementById("incidents-list");
	reportsList.innerHTML = "";
	for (let i = 0; i < reports.length; i++) {
		let report = reports[i];
		let li = document.createElement("li");
		if(report.incidentType == "Theft")
			li.innerHTML = `<p>${report.incidentType}</p><p>${report.incidentDate}</p><p>${report.incidentSummary}</p>`;
		if(report.incidentType == "Theft")
		reportsList.appendChild(li);

		}
		}
function filterSelectionS() {
	let reportsList = document.getElementById("incidents-list");
	reportsList.innerHTML = "";
	for (let i = 0; i < reports.length; i++) {
		let report = reports[i];
		let li = document.createElement("li");
		if(report.incidentType == "Sexual Assault")
			li.innerHTML = `<p>${report.incidentType}</p><p>${report.incidentDate}</p><p>${report.incidentSummary}</p>`;
		if(report.incidentType == "Sexual Assault")
			reportsList.appendChild(li);

		}
		}

function filterSelectionO() {
	let reportsList = document.getElementById("incidents-list");
	reportsList.innerHTML = "";
	for (let i = 0; i < reports.length; i++) {
		let report = reports[i];
		let li = document.createElement("li");
		if(report.incidentType == "Other")
			li.innerHTML = `<p>${report.incidentType}</p><p>${report.incidentDate}</p><p>${report.incidentSummary}</p>`;
		if(report.incidentType == "Other")
			reportsList.appendChild(li);

		}
		}
