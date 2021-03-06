Cryptocat.Diag = {
	error: {},
	message: {},
	save: {}
};

(function() {
	'use strict';
	var dialog = Remote.require('dialog');

	Cryptocat.Diag.error.updateCheck = function() {
		dialog.showErrorBox(
			'Cryptocat: Cannot Check for Updates',
			'Cryptocat was unable to check for updates. ' +
			'Please make sure you are online: Keeping your ' +
			'Cryptocat client up to date is important.'
		);
	},

	Cryptocat.Diag.error.updateDownloader = function() {
		dialog.showErrorBox(
			'Cryptocat: Update Download Failed',
			'Your Cryptocat update could not be downloaded. Please ' +
			'check your Internet connection and try again.'
		);
	},

	Cryptocat.Diag.error.loginError = function() {
		dialog.showErrorBox(
			'Cryptocat: Login Error',
			'We could not log you in at this time. ' +
			'Please check your password and try again.'
		);
	};

	Cryptocat.Diag.error.offline = function() {
		dialog.showErrorBox(
			'Cryptocat: Must be Logged in',
			'You must be logged into your Cryptocat ' +
			'account in order to perform this action.'
		);
	};

	Cryptocat.Diag.error.addBuddyValidation = function() {
		dialog.showErrorBox(
			'Cryptocat: Invalid Buddy Username',
			'Please check that your buddy\'s username is valid.'
		);
	};

	Cryptocat.Diag.error.changePasswordValidation = function() {
		dialog.showErrorBox(
			'Cryptocat: Invalid Password',
			'Please check that your password is at least 12 characters long.'
		);
	};

	Cryptocat.Diag.error.addDeviceValidation = function() {
		dialog.showErrorBox(
			'Cryptocat: Invalid Device Name',
			'Please check that your device name contains only numbers and letters.'
		);
	};

	Cryptocat.Diag.error.unexpectedDisconnect = function() {
		dialog.showErrorBox(
			'Cryptocat: Disconnected',
			'You have been disconnected. Try logging in again.'
		);
	};

	Cryptocat.Diag.error.checkCertificate = function() {
		dialog.showErrorBox(
			'Cryptocat: Security Error',
			'Cryptocat cannot securely validate the identity of the Cryptocat ' +
			'server. In order to protect your account, the client will now quit. ' +
			'It is possible that your network connection is being tampered with.'
		)
	};

	Cryptocat.Diag.message.deviceSetup = function(callback) {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['Continue', 'Learn more', 'Quit'],
			defaultId: 0,
			title: 'Cryptocat: Logging in from New Device',
			message: 'You are logging into your Cryptocat account ' +
				'from a new computer.\n \n' +
				'Doing so will add this computer to your list of trusted devices and ' +
				'store sensitive encryption keys in your user profile. \n \n' +
				'Continue and add this computer as a trusted device?'
		}, callback);
	};

	Cryptocat.Diag.message.removeDevice = function(callback) {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['Remove device', 'Cancel'],
			defaultId: 1,
			title: 'Cryptocat: Remove another device?',
			message: 'You are removing one your devices. ' +
				'Note that the keys on the remote devices will not be deleted. ' + 
				'If you log back in from this device, it will be re-added to your ' +
				'device list. Proceed?'
		}, callback);
	};

	Cryptocat.Diag.message.removeThisDevice = function(callback) {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['Remove device', 'Cancel'],
			defaultId: 1,
			title: 'Cryptocat: Remove this device?',
			message: 'You are removing the device you are currently logged in from. ' +
				'This will delete the keys stored on this device and log you out. Proceed?'
		}, callback);
	};

	Cryptocat.Diag.message.updateAvailable = function(callback) {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['Download now', 'Remind me later'],
			defaultId: 0,
			title: 'Cryptocat: Update Available!',
			message: 'An update is available for Cryptocat. ' +
				'It is strongly recommended that you download now ' +
				'to enjoy new features, improved reliability and stronger security.'
		}, callback);
	};

	Cryptocat.Diag.message.updateDownloaded = function(callback) {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['OK'],
			defaultId: 0,
			title: 'Cryptocat: Update Downloaded',
			message: 'Cryptocat will now quit. Please open the downloaded ' +
				'package to install your Cryptocat update.'
		}, callback);
	};

	Cryptocat.Diag.message.addBuddySuccess = function() {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['OK'],
			defaultId: 0,
			title: 'Cryptocat: Success!',
			message: 'Your buddy request has been sent.'
		});
	};

	Cryptocat.Diag.message.removeBuddyConfirm = function(callback) {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['Remove buddy', 'Cancel'],
			defaultId: 1,
			title: 'Cryptocat: Remove Buddy?',
			message: 'You will appear as offline to this buddy and they ' +
				'will be unable to confirm that you have removed them.'
		}, callback);
	};

	Cryptocat.Diag.message.about = function() {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['OK', 'Learn more'],
			defaultId: 0,
			title: 'About Cryptocat',
			message: 'Cryptocat ' + Cryptocat.Version + ', Beta release.\n' +
				'Authored by Nadim Kobeissi.\n\nDistributed as free software ' +
				'under the GNU General Public License (version 3).\n\n' +
				'N. L.'
		}, function(response) {
			if (response === 1) {
				Remote.shell.openExternal('https://crypto.cat')
			}
		});
	};

	Cryptocat.Diag.message.newDevice = function(username, callback) {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['View devices', 'OK'],
			defaultId: 0,
			title: 'Cryptocat: New Device for ' + username,
			message: username + ' appears to have added a new device ' +
				'to their Cryptocat account. Would you like to view ' +
				'their devices?'
		}, callback);
	};

	Cryptocat.Diag.message.changePasswordSuccess = function() {
		dialog.showMessageBox({
			type: 'info',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['OK'],
			defaultId: 0,
			title: 'Cryptocat: Password Changed',
			message: 'Your password has been successfully changed.'
		});
	};

	Cryptocat.Diag.message.addBuddyRequest = function(
		username, callback
	) {
		dialog.showMessageBox({
			type: 'question',
			icon: __dirname.slice(0, -3) + 'img/logo/logo64.png',
			buttons: ['Accept', 'Deny', 'Remind me later'],
			defaultId: 2,
			title: 'Cryptocat: Buddy Request!',
			message: '"' + username + '" would like to be your buddy. Accept their request?',
		}, callback);
	};

	Cryptocat.Diag.save.updateDownloader = function(browserWindow, callback) {
		dialog.showSaveDialog(browserWindow, {
			title: 'Save Cryptocat Update Installer',
			defaultPath: 'Cryptocat-' + process.platform + '-x64.zip'
		}, callback);
	};

})();
