import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";
import Solution3 from "@/components/solutions/Solution3";

function ServicePage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Products"
        title="Our Products"
        pageName="Products"
      />
      <div className="home3-solution-section sec-mar">
        <div className="container">
          <div className="row justify-content-center g-4">
            <Solution3 />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServicePage;
