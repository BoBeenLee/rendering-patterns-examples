import React from 'react';
import { proxy, useSnapshot } from 'valtio';
import { getUser } from '../apis/user';

const state = proxy({ user: getUser() });

const User = () => {
  const snap = useSnapshot(state);

  return (
    <div>
      <h2>User</h2>
      <ul>
        <li>{`name: ${snap.user.name}`}</li>
      </ul>
    </div>
  );
};

export default User;
