export enum EAuditingStatus {
  SUCCESS = 1,
  FAILED = 2,
}

export enum EMenu {
  VIEW_DASHBOARD_MENU = 'DASHBOARD',
  VIEW_YIELD_MENU = 'YIELD',
  VIEW_LOG_MENU = 'LOG',
  VIEW_MICELLANEOUS_MENU = 'MICELLANEOUS',
  VIEW_SETTINGS_MENU = 'SETTINGS',
}

export enum ERole {
  SUPERADMIN = 'Superadmin',
  ADMIN = 'Admin',
  EDITOR = 'Editor',
  AUTHOR = 'Author',
}

export enum EResource {
  SSE = 'SSE',
  ACCOUNT = 'ACCOUNT',
  DASHBOARD = 'DASHBOARD',
  LOGIN = 'LOGIN',
  USER = 'USER',
  ROLE = 'ROLE',
  PERMISSION = 'PERMISSION',
  SYSTEM_ACCESS = 'SYSTEM_ACCESS',
  REALTIME_SSE = 'REALTIME_SSE',
  LOG = 'LOG',
  VIEW = 'VIEW',
  PROJECT = 'PROJECT',
  PROJECT_LINE = 'PROJECT_LINE',
  CUSTOMER = 'CUSTOMER',
  WORKORDER = 'WORKORDER',
  JOBORDER = 'JOBORDER',
  LINE = 'LINE',
  LINE_OWNER = 'LINE_OWNER',
  PROCESS = 'PROCESS',
  YIELD = 'YIELD',
}

export enum EAction {
  ADD = 'ADD',
  READ = 'READ',
  WRITE = 'WRITE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  DELETE_ALL = 'DELETE_ALL',
  EXPORT = 'EXPORT',
  BAN = 'BAN',
  UNBAN = 'UNBAN',
  UPDATE_STATUS = 'UPDATE_STATUS',
}

export enum EPermission {
  // USER
  USER_READ = `${EResource.USER}:${EAction.READ}`,
  USER_WRITE = `${EResource.USER}:${EAction.WRITE}`,
  USER_UPDATE = `${EResource.USER}:${EAction.UPDATE}`,
  USER_DELETE = `${EResource.USER}:${EAction.DELETE}`,
  USER_BAN = `${EResource.USER}:${EAction.BAN}`,
  USER_UNBAN = `${EResource.USER}:${EAction.UNBAN}`,
  USER_UPDATE_STATUS = `${EResource.USER}:${EAction.UPDATE_STATUS}`,

  // ROLE
  ROLE_READ = `${EResource.ROLE}:${EAction.READ}`,
  ROLE_WRITE = `${EResource.ROLE}:${EAction.WRITE}`,
  ROLE_UPDATE = `${EResource.ROLE}:${EAction.UPDATE}`,
  ROLE_DELETE = `${EResource.ROLE}:${EAction.DELETE}`,

  // PERMISSION
  PERMISSION_READ = `${EResource.PERMISSION}:${EAction.READ}`,
  PERMISSION_WRITE = `${EResource.PERMISSION}:${EAction.WRITE}`,
  PERMISSION_UPDATE = `${EResource.PERMISSION}:${EAction.UPDATE}`,
  PERMISSION_DELETE = `${EResource.PERMISSION}:${EAction.DELETE}`,

  // SYSTEM ACCESS
  SYSTEM_ACCESS_READ = `${EResource.SYSTEM_ACCESS}:${EAction.READ}`,
  SYSTEM_ACCESS_ADD = `${EResource.SYSTEM_ACCESS}:${EAction.WRITE}`,
  SYSTEM_ACCESS_REMOVE = `${EResource.SYSTEM_ACCESS}:${EAction.UPDATE}`,
  SYSTEM_ACCESS_UPDATE = `${EResource.SYSTEM_ACCESS}:${EAction.DELETE}`,

  // VIEW
  VIEW_READ = `${EResource.VIEW}:${EAction.READ}`,
  VIEW_WRITE = `${EResource.VIEW}:${EAction.WRITE}`,
  VIEW_UPDATE = `${EResource.VIEW}:${EAction.UPDATE}`,
  VIEW_DELETE = `${EResource.VIEW}:${EAction.DELETE}`,

  // LOG
  LOG_READ = `${EResource.LOG}:${EAction.READ}`,
  LOG_DELETE = `${EResource.LOG}:${EAction.DELETE}`,

  // PROJECT
  PROJECT_READ = `${EResource.PROJECT}:${EAction.READ}`,
  PROJECT_WRITE = `${EResource.PROJECT}:${EAction.WRITE}`,
  PROJECT_UPDATE = `${EResource.PROJECT}:${EAction.UPDATE}`,
  PROJECT_DELETE = `${EResource.PROJECT}:${EAction.DELETE}`,

  // PROJECT LINE
  PROJECT_LINE_READ = `${EResource.PROJECT_LINE}:${EAction.READ}`,
  PROJECT_LINE_WRITE = `${EResource.PROJECT_LINE}:${EAction.WRITE}`,
  PROJECT_LINE_UPDATE = `${EResource.PROJECT_LINE}:${EAction.UPDATE}`,
  PROJECT_LINE_DELETE = `${EResource.PROJECT_LINE}:${EAction.DELETE}`,

  // CUSTOMER
  CUSTOMER_READ = `${EResource.CUSTOMER}:${EAction.READ}`,
  CUSTOMER_WRITE = `${EResource.CUSTOMER}:${EAction.WRITE}`,
  CUSTOMER_UPDATE = `${EResource.CUSTOMER}:${EAction.UPDATE}`,
  CUSTOMER_DELETE = `${EResource.CUSTOMER}:${EAction.DELETE}`,

  // WORKORDER
  WORKORDER_READ = `${EResource.WORKORDER}:${EAction.READ}`,
  WORKORDER_WRITE = `${EResource.WORKORDER}:${EAction.WRITE}`,
  WORKORDER_UPDATE = `${EResource.WORKORDER}:${EAction.UPDATE}`,
  WORKORDER_DELETE = `${EResource.WORKORDER}:${EAction.DELETE}`,

  // JOBORDER
  JOBORDER_READ = `${EResource.JOBORDER}:${EAction.READ}`,
  JOBORDER_WRITE = `${EResource.JOBORDER}:${EAction.WRITE}`,
  JOBORDER_UPDATE = `${EResource.JOBORDER}:${EAction.UPDATE}`,
  JOBORDER_DELETE = `${EResource.JOBORDER}:${EAction.DELETE}`,

  // LINE
  LINE_READ = `${EResource.LINE}:${EAction.READ}`,
  LINE_WRITE = `${EResource.LINE}:${EAction.WRITE}`,
  LINE_UPDATE = `${EResource.LINE}:${EAction.UPDATE}`,
  LINE_DELETE = `${EResource.LINE}:${EAction.DELETE}`,

  // PROCESS
  PROCESS_READ = `${EResource.PROCESS}:${EAction.READ}`,
  PROCESS_WRITE = `${EResource.PROCESS}:${EAction.WRITE}`,
  PROCESS_UPDATE = `${EResource.PROCESS}:${EAction.UPDATE}`,
  PROCESS_DELETE = `${EResource.PROCESS}:${EAction.DELETE}`,

  // YIELD
  YIELD_READ = `${EResource.YIELD}:${EAction.READ}`,
  YIELD_WRITE = `${EResource.YIELD}:${EAction.WRITE}`,
  YIELD_UPDATE = `${EResource.YIELD}:${EAction.UPDATE}`,
  YIELD_DELETE = `${EResource.YIELD}:${EAction.DELETE}`,

  // LINE OWNER
  LINE_OWNER_READ = `${EResource.LINE_OWNER}:${EAction.READ}`,
  LINE_OWNER_WRITE = `${EResource.LINE_OWNER}:${EAction.WRITE}`,
  LINE_OWNER_UPDATE = `${EResource.LINE_OWNER}:${EAction.UPDATE}`,
  LINE_OWNER_DELETE = `${EResource.LINE_OWNER}:${EAction.DELETE}`,

  // DASHBOARD
  DASHBOARD_READ = `${EResource.DASHBOARD}:${EAction.READ}`,
  DASHBOARD_WRITE = `${EResource.DASHBOARD}:${EAction.WRITE}`,
  DASHBOARD_UPDATE = `${EResource.DASHBOARD}:${EAction.UPDATE}`,
  DASHBOARD_DELETE = `${EResource.DASHBOARD}:${EAction.DELETE}`,

  // ACCOUNT
  ACCOUNT_READ = `${EResource.ACCOUNT}:${EAction.READ}`,
  ACCOUNT_WRITE = `${EResource.ACCOUNT}:${EAction.WRITE}`,
  ACCOUNT_UPDATE = `${EResource.ACCOUNT}:${EAction.UPDATE}`,
  ACCOUNT_DELETE = `${EResource.ACCOUNT}:${EAction.DELETE}`,

  // SEE
  SSE_READ = `${EResource.SSE}:${EAction.READ}`,
  SSE_WRITE = `${EResource.SSE}:${EAction.WRITE}`,
  SSE_UPDATE = `${EResource.SSE}:${EAction.UPDATE}`,
  SSE_DELETE = `${EResource.SSE}:${EAction.DELETE}`,
}
