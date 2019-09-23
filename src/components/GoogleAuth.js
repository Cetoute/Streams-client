import React from 'react';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '273480231172-dnm450l3ki1fujqp2i0au2v6r322alen.apps.googleusercontent.com',
				scope: 'email'
			});
		});
	}
	render() {
		return <div>Google Auth</div>;
	}
}

export default GoogleAuth;
