# Changelog

## 1.0.0

* Multiparty meeting renamed to livechart
* Merged room selector- and join- dialog - default keyboard focus on login field
* Localization selectable
* Added aspect ratio 16 : 9  and this is default now, 
* New worker load calculation so router selection is based on that and not random anymore
* New permissions and roles:
  * Propagate userRoles to client state, 
  * Extend userRoles and use the new audio, video permissions, 
  * New permission to modify peer roles
  * Create room actions for giving and taking roles
  * Add functions to client for modifying roles live
  * Ability to give roles to users
  * Add new permission to config
* Add room to userMapping. Example of giving moderator if there is no authenticated user
* Promote all peers from lobby when a peer joins with the PROMOTE_PEER permission and activateOnHostJoin is true in config
* Make menus more intuitive on mobile
* Simplify electron screenshare check
* Logo support
* Improve autoMute mic-indicators, Improve audio level scaling
* Clean up participant list
* Add indicator for peers in focus. 
* TCP enabled by default, prefer UDP
* Ability for Prometheus exporter to listen on localhost
* Make list headers bolder
* Trim displayName inputs. Add random number to Guest displayName.
* Removed facingMode from mobile
* Documentation for prometheus exporter
* Added switching of own video mirror in settings
* Added hiding of own videos
* Request audio and webcam permission at once, when user is requesting media
* Add initial support for local and saml auth
  * Local login form
  * Add bcrypt encrypted passwords for local strategy
  * Add displayName mapping to usermapping
  * Add saml attriute mappings
* Use shared cookieparser for web and websocket
* Update TopBar leave button
* Add joinAudio capability
* Standardize Auth button

* First stable release?
