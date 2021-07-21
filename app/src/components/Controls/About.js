import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRoomContext } from '../../RoomContext';
import * as roomActions from '../../actions/roomActions';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = (theme) =>
	({
		dialogPaper :
		{
			width                          : '30vw',
			[theme.breakpoints.down('lg')] :
			{
				width : '40vw'
			},
			[theme.breakpoints.down('md')] :
			{
				width : '50vw'
			},
			[theme.breakpoints.down('sm')] :
			{
				width : '70vw'
			},
			[theme.breakpoints.down('xs')] :
			{
				width : '90vw'
			}
		},
		logo :
		{
			marginRight : 'auto'
		},
		link :
		{
			display      : 'block',
			textAlign    : 'center',
			marginBottom : theme.spacing(1)
		},
		divider :
		{
			marginBottom : theme.spacing(3)
		}
	});
const companyUrl='https://company.example.ro';
const About = ({
	aboutOpen,
	handleCloseAbout,
	classes
}) =>
{
	return (
		<Dialog
			open={aboutOpen}
			onClose={() => handleCloseAbout(false)}
			classes={{
				paper : classes.dialogPaper
			}}
		>
			<DialogTitle id='form-dialog-title'>
				<FormattedMessage
					id='room.about'
					defaultMessage='About'
				/>
			</DialogTitle>
			<DialogContent dividers>
				<DialogContentText paragraph>
					your company name.				
				</DialogContentText>
				<DialogContentText paragraph>
					introduce your company summary.
				</DialogContentText>
				<DialogContentText align='center' paragraph>
					<Link href={companyUrl} target='_blank' rel='noreferrer' color='secondary' variant='h6'>
						{companyUrl}
					</Link>
				</DialogContentText>
				<DialogContentText align='center' variant='body2'>
					<FormattedMessage
						id='label.version'
						defaultMessage='Version'
					/>
					:{` ${process.env.REACT_APP_VERSION}`}
				</DialogContentText>
				<Divider variant='middle' light className={classes.divider}/>
				{
					window.config.supportUrl
					&&
					<DialogContentText align='center' paragraph>
						<span>Visit for more info: </span>
						<Link href={window.config.supportUrl} target='_blank' rel='noreferrer' color='secondary'>
							{ window.config.supportUrl }
						</Link>
					</DialogContentText>
				}
				<Link href={window.config.privacyUrl ? window.config.privacyUrl : 'privacy/privacy.html'} target='_blank' rel='noreferrer' color='secondary' className={classes.link}>
					Data protection and Privacy Policy
				</Link>

			</DialogContent>
			<DialogActions>
				{ window.config.logo && <img alt='Logo' className={classes.logo} src={window.config.logo} /> }
				<Button onClick={() => { handleCloseAbout(false); }} color='primary'>
					<FormattedMessage
						id='label.close'
						defaultMessage='Close'
					/>
				</Button>
			</DialogActions>
		</Dialog>
	);
};

About.propTypes =
{
	roomClient       : PropTypes.object.isRequired,
	aboutOpen        : PropTypes.bool.isRequired,
	handleCloseAbout : PropTypes.func.isRequired,
	classes          : PropTypes.object.isRequired
};

const mapStateToProps = (state) =>
	({
		aboutOpen : state.room.aboutOpen
	});

const mapDispatchToProps = {
	handleCloseAbout : roomActions.setAboutOpen
};

export default withRoomContext(connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{
		areStatesEqual : (next, prev) =>
		{
			return (
				prev.room.aboutOpen === next.room.aboutOpen
			);
		}
	}
)(withStyles(styles)(About)));