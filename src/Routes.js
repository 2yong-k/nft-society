import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import WithLayout from "./WithLayout";
import { Main as MainLayout } from "./layouts";
// NFTSociety pages
import {
  Home as HomeView,
  Marketplace as MarketplaceView,
  Projects as ProjectsView,
  Games as GamesView,
  Artists as ArtistsView,
  Event as EventView,
  More as MoreView,
  Wallet as WalletView,
} from "./views/nftsocietyPages";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/nftsociety-marketplace"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={MarketplaceView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/nftsociety-projects"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ProjectsView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/nftsociety-games"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={GamesView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/nftsociety-artists"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ArtistsView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/nftsociety-event"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={EventView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/nftsociety-more"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={MoreView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/nftsociety-wallet"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={WalletView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
