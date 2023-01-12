function destinationMapper(input){
    let pattern = /([=\/])(?<location>[A-Z][a-zA-Z]{2,})\1/g;
    let destinations = [];
    let travelPoints = 0;

    let locationMatches = input.matchAll(pattern);
    for (const location of locationMatches) {
        let locationName = location.groups.location;
        destinations.push(locationName);
        travelPoints += locationName.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/CyP/=Invalid/invalid==i5valid=/I5valid/=i=")