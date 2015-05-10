
// a simple sample to display Notification

// create the notification
						var notification = new NotificationFx({
							message : '<span class="icon icon-settings"></span><p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
							layout : 'bar',
							effect : 'exploader',
							ttl : 9000000,
							type : 'notice', // notice, warning or error
							onClose : function() {
								bttn.disabled = false;
							}
						});

						// show the notification
						notification.show();