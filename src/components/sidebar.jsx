import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "@rmwc/avatar/avatar.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "@material/list/dist/mdc.list.css";
import "@rmwc/list/collapsible-list.css";
import "@material/drawer/dist/mdc.drawer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faFolder,
  faFolderOpen,
  faNetworkWired,
  faMapSigns,
  faTags,
  faServer,
  faUserCog,
  faUserFriends,
  faPhotoVideo,
  faStreetView,
  faSitemap,
  faCog
} from "@fortawesome/free-solid-svg-icons";

import { Avatar } from "@rmwc/avatar";
import { Button } from "@rmwc/button";
import {
  Drawer,
  DrawerAppContent,
  DrawerContent,
  DrawerHeader,
  DrawerSubtitle,
  DrawerTitle
} from "@rmwc/drawer";
import { CollapsibleList, List, ListDivider, SimpleListItem } from "@rmwc/list";

import {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemMeta
} from "@rmwc/list";

import { Theme } from "@rmwc/theme";

const Sidebar = props => {
  return (
    <React.Fragment>
      <Drawer dismissible open={props.open}>
        <div />
        <DrawerHeader>
          <DrawerTitle>Dashboard</DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <ListDivider />
            <CollapsibleList
              handle={
                <SimpleListItem
                  graphic={
                    <Avatar
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
                      size="xlarge"
                      name="Alexei Matveev"
                    />
                  }
                  text="Alexei Matveev"
                  metaIcon="expand_more"
                />
              }
              onOpen={() => console.log("open")}
              onClose={() => console.log("close")}
            >
              <SimpleListItem
                text="Account"
                graphic={<FontAwesomeIcon icon={faUserCog} size="xs" />}
              />
              <SimpleListItem
                text="Team"
                graphic={<FontAwesomeIcon icon={faUserFriends} size="xs" />}
              />
              <SimpleListItem text="Sign out" graphic="exit_to_app" />
            </CollapsibleList>
            <ListDivider />

            <CollapsibleList
              handle={
                <SimpleListItem
                  text="Data Storage"
                  graphic={<FontAwesomeIcon icon={faServer} size="xs" />}
                  metaIcon="expand_more"
                />
              }
              startOpen={true}
            >
              <SimpleListItem
                text="Upload Queue"
                graphic={<FontAwesomeIcon icon={faCloudUploadAlt} size="xs" />}
              />
              <SimpleListItem
                text="Media Collections"
                graphic={<FontAwesomeIcon icon={faPhotoVideo} size="xs" />}
              />
              <SimpleListItem
                text="Places"
                graphic={<FontAwesomeIcon icon={faMapSigns} size="xs" />}
              />
              <SimpleListItem
                text="Tags"
                graphic={<FontAwesomeIcon icon={faTags} size="xs" />}
              />
            </CollapsibleList>

            <ListDivider />

            <CollapsibleList
              handle={
                <SimpleListItem
                  text="Presentations"
                  graphic={<FontAwesomeIcon icon={faStreetView} size="xs" />}
                  metaIcon="expand_more"
                />
              }
            >
              <SimpleListItem
                graphic={
                  <Avatar
                    src="https://images.unsplash.com/photo-1500940287698-7bc4e3e1e1b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    size="small"
                    square
                  />
                }
                text="GloDiv"
                meta={<Theme use="secondary">Running</Theme>}
              />

              <SimpleListItem
                graphic={
                  <Avatar
                    src="https://images.unsplash.com/photo-1513781050488-6dd358209a1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
                    size="small"
                    square
                  />
                }
                text="Singapore SHGIS"
                metaIcon="lock"
              />

              <SimpleListItem
                graphic={
                  <Avatar
                    src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                    size="small"
                    square
                  />
                }
                text="Paulinerkirche"
              />
            </CollapsibleList>

            <ListDivider />

            <CollapsibleList
              handle={
                <SimpleListItem
                  text="Installations"
                  graphic={<FontAwesomeIcon icon={faSitemap} size="xs" />}
                  metaIcon="expand_more"
                />
              }
            >
              <SimpleListItem
                graphic={<FontAwesomeIcon icon={faCog} spin color="green" />}
                text="Waldweg"
                meta={<Theme use="secondary">Online</Theme>}
              />
              <SimpleListItem
                graphic={<FontAwesomeIcon icon={faSitemap} />}
                text="Senckenberg Museum Görlitz"
              />
            </CollapsibleList>
          </List>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
