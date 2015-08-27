'use strict';

LeadDyno.key = "df33cb4904fa2ff88eb9fa32ec40cc25a895daa2";

LeadDyno.autoWatch(function() {
	console.log('Watch success!');
});

// LeadDyno.watch('');

LeadDyno.recordLead();

LeadDyno.recordPurchase(function() {
	console.log('Purchase success!');
});

LeadDyno.recordVisit(function() {
	console.log('Visit success!');
});