import IconDashboard from '~~/public/dashboard/dashboar-home.svg';
import IconSettings from '~~/public/dashboard/settings.svg';
import IconReports from '~~/public/dashboard/reports.svg';
import IconDatabase from '~~/public/icons/database.svg';
import IconLogging from '~~/public/icons/logging.svg';

export const getMenuIcon = (key: string) => {
  switch (key) {
    case 'DASHBOARD':
      return IconDashboard;

    case 'YIELD':
      return IconReports;

    case 'LOG':
      return IconDatabase;

    case 'MICELLANEOUS':
      return IconLogging;

    case 'SETTINGS':
    default:
      return IconSettings;
  }
};
