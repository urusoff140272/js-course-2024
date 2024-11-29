const ask = (quection, yes, no) => {
    if (confirm(quection)) {
        return yes();
    }
    return no();
}

ask("Are you ready", () => { alert('READY') }, () => { alert("NO READY") })