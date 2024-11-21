import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If the user is not authenticated, redirect to the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  }

  // 4. If the user is authenticated, show the children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
