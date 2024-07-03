import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";
import Home3Team from "@/components/Team/Home3Team";

function Team1() {
  return (
    <Layout>
      <Breadcrumb pageList="Team" title="Meet Our Team" pageName="TEAM" />
      <div className="home3-team-area sec-mar">
        <div className="container">
          <div className="row">
            <Home3Team />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Team1;
