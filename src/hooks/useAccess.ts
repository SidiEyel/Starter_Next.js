import auth from '@/helpers/auth';

const MENU_ACCESS: any = {
  admin: '*',
  driver: ['rides', 'shifts'],
  moderator: ['rides', 'clients', 'drivers', 'live_map'],
  customer: ['rides'],
};

const ENTITY_ACCESS: any = {
  admin: '*',
  moderator: {
    rides: ['view', 'edit'],
    drivers: ['view', 'edit'],
    clients: ['view', 'edit'],
  },
  driver: '-',
  curstomer: '-',
};

export function useAccess() {
  // current user
  const userInfo = auth.getUserInfo();

  const hasMenuAccess = (menu: any): boolean => {
    // const { type } = userInfo || {};
    // const access = MENU_ACCESS[type];
    // if (access === '*') return true;
    // return access?.includes(menu);
    return true
  };

  const hasActionAccess = (entity: any, action: any): boolean => {
    const { type } = userInfo || {};
    const accessType = ENTITY_ACCESS[type];
    if (accessType === '*') return true;
    if (accessType === '-') return false;
    const access = accessType ? accessType[entity] : null;
    return access?.includes(action);
  };

  const hasSettingAccess = (setting: any) => {
    return true;
  };

  return {
    hasMenuAccess,
    hasSettingAccess,
    hasActionAccess,
    isAdmin: userInfo?.type === 'admin',
  };
}
