/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AsyncPollingResult, DatasourceType } from '../common/types/data_connections';

export const showDataConnectionsData = {
  schema: [
    {
      name: 'DATASOURCE_NAME',
      type: 'string',
    },
    {
      name: 'CONNECTOR_TYPE',
      type: 'string',
    },
  ],
  datarows: [
    ['my_spark_actual', 'SPARK'],
    ['@opensearch', 'OPENSEARCH'],
    ['my_spark', 'SPARK'],
  ],
  total: 3,
  size: 3,
  jsonData: [
    {
      DATASOURCE_NAME: 'my_spark3',
      CONNECTOR_TYPE: 'SPARK',
    },
    {
      DATASOURCE_NAME: 'my_spark4',
      CONNECTOR_TYPE: 'SPARK',
    },
    {
      DATASOURCE_NAME: 'my_spark',
      CONNECTOR_TYPE: 'SPARK',
    },
    {
      DATASOURCE_NAME: 'my_spark2',
      CONNECTOR_TYPE: 'SPARK',
    },
  ],
};

export const describePrometheusDataConnection = {
  name: 'prom',
  description: '',
  connector: 'PROMETHEUS',
  allowedRoles: [],
  properties: {
    'prometheus.uri': 'localhost:9201',
  },
};

export const testS3ConnectionDetails = {
  dataConnection: 'ya',
  description: '',
  connector: 'S3GLUE' as DatasourceType,
  properties: {
    'glue.indexstore.opensearch.uri': 'y',
    'glue.indexstore.opensearch.region': 'us-west-2',
  },
};

export const testPrometheusConnectionDetails = {
  dataConnection: 'prom',
  description: '',
  connector: 'PROMETHEUS' as DatasourceType,
  properties: {
    'prometheus.uri': 'localhost:9201',
  },
};

export const describeS3Dataconnection = {
  name: 'ya',
  description: '',
  connector: 'S3GLUE',
  allowedRoles: [],
  properties: {
    'glue.indexstore.opensearch.uri': 'y',
    'glue.indexstore.opensearch.region': 'us-west-2',
  },
};

export const mockRoleData = {
  total: 44,
  data: {
    security_analytics_ack_alerts: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/opensearch/securityanalytics/alerts/*'],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    observability_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/opensearch/observability/get'],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    kibana_user: {
      reserved: true,
      hidden: false,
      description: 'Provide the minimum permissions for a kibana user',
      cluster_permissions: ['cluster_composite_ops'],
      index_permissions: [
        {
          index_patterns: [
            '.kibana',
            '.kibana-6',
            '.kibana_*',
            '.opensearch_dashboards',
            '.opensearch_dashboards-6',
            '.opensearch_dashboards_*',
          ],
          fls: [],
          masked_fields: [],
          allowed_actions: ['delete', 'index', 'manage', 'read'],
        },
        {
          index_patterns: ['.tasks', '.management-beats', '*:.tasks', '*:.management-beats'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices_all'],
        },
      ],
      tenant_permissions: [],
      static: true,
    },
    own_index: {
      reserved: true,
      hidden: false,
      description: 'Allow all for indices named like the current user',
      cluster_permissions: ['cluster_composite_ops'],
      index_permissions: [
        {
          index_patterns: ['${user_name}'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices_all'],
        },
      ],
      tenant_permissions: [],
      static: true,
    },
    alerting_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/alerting/*',
        'cluster:admin/opensearch/alerting/*',
        'cluster:admin/opensearch/notifications/feature/publish',
        'cluster_monitor',
      ],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: [
            'indices:admin/aliases/get',
            'indices:admin/mappings/get',
            'indices_monitor',
          ],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    snapshot_management_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opensearch/snapshot_management/policy/explain',
        'cluster:admin/opensearch/snapshot_management/policy/get',
        'cluster:admin/opensearch/snapshot_management/policy/search',
        'cluster:admin/repository/get',
        'cluster:admin/snapshot/get',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    all_access: {
      reserved: true,
      hidden: false,
      description: 'Allow full access to all indices and all cluster APIs',
      cluster_permissions: ['*'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['*'],
        },
      ],
      tenant_permissions: [
        {
          tenant_patterns: ['*'],
          allowed_actions: ['kibana_all_write'],
        },
      ],
      static: true,
    },
    alerting_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/alerting/alerts/get',
        'cluster:admin/opendistro/alerting/destination/get',
        'cluster:admin/opendistro/alerting/monitor/get',
        'cluster:admin/opendistro/alerting/monitor/search',
        'cluster:admin/opensearch/alerting/findings/get',
        'cluster:admin/opensearch/alerting/workflow/get',
        'cluster:admin/opensearch/alerting/workflow_alerts/get',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    cross_cluster_replication_follower_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/plugins/replication/autofollow/update'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: [
            'indices:admin/plugins/replication/index/pause',
            'indices:admin/plugins/replication/index/resume',
            'indices:admin/plugins/replication/index/setup/validate',
            'indices:admin/plugins/replication/index/start',
            'indices:admin/plugins/replication/index/status_check',
            'indices:admin/plugins/replication/index/stop',
            'indices:admin/plugins/replication/index/update',
            'indices:data/write/plugins/replication/changes',
          ],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    manage_snapshots: {
      reserved: true,
      hidden: false,
      description: 'Provide the minimum permissions for managing snapshots',
      cluster_permissions: ['manage_snapshots'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices:admin/create', 'indices:data/write/index'],
        },
      ],
      tenant_permissions: [],
      static: true,
    },
    logstash: {
      reserved: true,
      hidden: false,
      description: 'Provide the minimum permissions for logstash and beats',
      cluster_permissions: [
        'cluster:admin/ingest/pipeline/get',
        'cluster:admin/ingest/pipeline/put',
        'cluster_composite_ops',
        'cluster_monitor',
        'indices:admin/template/get',
        'indices:admin/template/put',
      ],
      index_permissions: [
        {
          index_patterns: ['logstash-*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['create_index', 'crud'],
        },
        {
          index_patterns: ['*beat*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['crud', 'create_index'],
        },
      ],
      tenant_permissions: [],
      static: true,
    },
    observability_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opensearch/observability/create',
        'cluster:admin/opensearch/observability/delete',
        'cluster:admin/opensearch/observability/get',
        'cluster:admin/opensearch/observability/update',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    point_in_time_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['manage_point_in_time'],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    notifications_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/opensearch/notifications/*'],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    notifications_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opensearch/notifications/channels/get',
        'cluster:admin/opensearch/notifications/configs/get',
        'cluster:admin/opensearch/notifications/features',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    cross_cluster_replication_leader_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: [
            'indices:admin/plugins/replication/index/setup/validate',
            'indices:data/read/plugins/replication/changes',
            'indices:data/read/plugins/replication/file_chunk',
          ],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    knn_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/knn_get_model_action',
        'cluster:admin/knn_search_model_action',
        'cluster:admin/knn_stats_action',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    ppl_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/opensearch/ppl'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: [
            'indices:admin/mappings/get',
            'indices:data/read/search*',
            'indices:monitor/settings/get',
          ],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    security_analytics_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opensearch/securityanalytics/alerts/get',
        'cluster:admin/opensearch/securityanalytics/correlations/findings',
        'cluster:admin/opensearch/securityanalytics/correlations/list',
        'cluster:admin/opensearch/securityanalytics/detector/get',
        'cluster:admin/opensearch/securityanalytics/detector/search',
        'cluster:admin/opensearch/securityanalytics/findings/get',
        'cluster:admin/opensearch/securityanalytics/mapping/get',
        'cluster:admin/opensearch/securityanalytics/mapping/view/get',
        'cluster:admin/opensearch/securityanalytics/rule/get',
        'cluster:admin/opensearch/securityanalytics/rule/search',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    security_analytics_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opensearch/securityanalytics/alerts/*',
        'cluster:admin/opensearch/securityanalytics/correlations/*',
        'cluster:admin/opensearch/securityanalytics/detector/*',
        'cluster:admin/opensearch/securityanalytics/findings/*',
        'cluster:admin/opensearch/securityanalytics/mapping/*',
        'cluster:admin/opensearch/securityanalytics/rule/*',
      ],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices:admin/mapping/put', 'indices:admin/mappings/get'],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    knn_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/knn_delete_model_action',
        'cluster:admin/knn_get_model_action',
        'cluster:admin/knn_remove_model_from_cache_action',
        'cluster:admin/knn_search_model_action',
        'cluster:admin/knn_stats_action',
        'cluster:admin/knn_training_job_route_decision_info_action',
        'cluster:admin/knn_training_job_router_action',
        'cluster:admin/knn_training_model_action',
        'cluster:admin/knn_update_model_graveyard_action',
        'cluster:admin/knn_warmup_action',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    asynchronous_search_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/opendistro/asynchronous_search/get'],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    index_management_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/ism/*',
        'cluster:admin/opendistro/rollup/*',
        'cluster:admin/opendistro/transform/*',
        'cluster:admin/opensearch/controlcenter/lron/*',
        'cluster:admin/opensearch/notifications/channels/get',
        'cluster:admin/opensearch/notifications/feature/publish',
      ],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices:admin/opensearch/ism/*'],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    readall_and_monitor: {
      reserved: true,
      hidden: false,
      description: 'Provide the minimum permissions for to readall indices and monitor the cluster',
      cluster_permissions: ['cluster_composite_ops_ro', 'cluster_monitor'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['read'],
        },
      ],
      tenant_permissions: [],
      static: true,
    },
    ml_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opensearch/ml/connectors/get',
        'cluster:admin/opensearch/ml/connectors/search',
        'cluster:admin/opensearch/ml/model_groups/search',
        'cluster:admin/opensearch/ml/models/get',
        'cluster:admin/opensearch/ml/models/search',
        'cluster:admin/opensearch/ml/tasks/get',
        'cluster:admin/opensearch/ml/tasks/search',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    security_rest_api_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'restapi:admin/actiongroups',
        'restapi:admin/allowlist',
        'restapi:admin/internalusers',
        'restapi:admin/nodesdn',
        'restapi:admin/roles',
        'restapi:admin/rolesmapping',
        'restapi:admin/ssl/certs/info',
        'restapi:admin/ssl/certs/reload',
        'restapi:admin/tenants',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    kibana_read_only: {
      reserved: true,
      hidden: false,
      cluster_permissions: [],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    cross_cluster_search_remote_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices:admin/shards/search_shards', 'indices:data/read/search'],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    reports_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/reports/definition/get',
        'cluster:admin/opendistro/reports/definition/list',
        'cluster:admin/opendistro/reports/instance/get',
        'cluster:admin/opendistro/reports/instance/list',
        'cluster:admin/opendistro/reports/menu/download',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    anomaly_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/ad/detector/info',
        'cluster:admin/opendistro/ad/detector/search',
        'cluster:admin/opendistro/ad/detector/validate',
        'cluster:admin/opendistro/ad/detectors/get',
        'cluster:admin/opendistro/ad/result/search',
        'cluster:admin/opendistro/ad/result/topAnomalies',
        'cluster:admin/opendistro/ad/tasks/search',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    anomaly_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/opendistro/ad/*', 'cluster_monitor'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: [
            'indices:admin/aliases/get',
            'indices:admin/mappings/get',
            'indices_monitor',
          ],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    reports_instances_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/reports/instance/get',
        'cluster:admin/opendistro/reports/instance/list',
        'cluster:admin/opendistro/reports/menu/download',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    snapshot_management_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opensearch/notifications/feature/publish',
        'cluster:admin/opensearch/snapshot_management/*',
        'cluster:admin/repository/*',
        'cluster:admin/snapshot/*',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    readall: {
      reserved: true,
      hidden: false,
      description: 'Provide the minimum permissions for to readall indices',
      cluster_permissions: ['cluster_composite_ops_ro'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['read'],
        },
      ],
      tenant_permissions: [],
      static: true,
    },
    asynchronous_search_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/opendistro/asynchronous_search/*'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices:data/read/search*'],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    ml_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/opensearch/ml/*', 'cluster_monitor'],
      index_permissions: [
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices_monitor'],
        },
      ],
      tenant_permissions: [],
      static: false,
    },
    reports_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/reports/definition/create',
        'cluster:admin/opendistro/reports/definition/delete',
        'cluster:admin/opendistro/reports/definition/get',
        'cluster:admin/opendistro/reports/definition/list',
        'cluster:admin/opendistro/reports/definition/on_demand',
        'cluster:admin/opendistro/reports/definition/update',
        'cluster:admin/opendistro/reports/instance/get',
        'cluster:admin/opendistro/reports/instance/list',
        'cluster:admin/opendistro/reports/menu/download',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    security_rest_api_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    ip2geo_datasource_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/geospatial/datasource/get'],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    alerting_ack_alerts: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/alerting/alerts/*',
        'cluster:admin/opendistro/alerting/chained_alerts/*',
        'cluster:admin/opendistro/alerting/workflow_alerts/*',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    ip2geo_datasource_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: ['cluster:admin/geospatial/datasource/*'],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    kibana_server: {
      reserved: true,
      hidden: false,
      description: 'Provide the minimum permissions for the Kibana server',
      cluster_permissions: [
        'cluster_composite_ops',
        'cluster_monitor',
        'indices:admin/index_template*',
        'indices:admin/template*',
        'indices:data/read/scroll*',
        'manage_point_in_time',
      ],
      index_permissions: [
        {
          index_patterns: ['.kibana', '.opensearch_dashboards'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices_all'],
        },
        {
          index_patterns: ['.kibana-6', '.opensearch_dashboards-6'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices_all'],
        },
        {
          index_patterns: ['.kibana_*', '.opensearch_dashboards_*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices_all'],
        },
        {
          index_patterns: ['.tasks'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices_all'],
        },
        {
          index_patterns: ['.management-beats*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices_all'],
        },
        {
          index_patterns: ['*'],
          fls: [],
          masked_fields: [],
          allowed_actions: ['indices:admin/aliases*'],
        },
      ],
      tenant_permissions: [],
      static: true,
    },
    notebooks_read_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/notebooks/get',
        'cluster:admin/opendistro/notebooks/list',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
    notebooks_full_access: {
      reserved: true,
      hidden: false,
      cluster_permissions: [
        'cluster:admin/opendistro/notebooks/create',
        'cluster:admin/opendistro/notebooks/delete',
        'cluster:admin/opendistro/notebooks/get',
        'cluster:admin/opendistro/notebooks/list',
        'cluster:admin/opendistro/notebooks/update',
      ],
      index_permissions: [],
      tenant_permissions: [],
      static: false,
    },
  },
};

export const mockShowDatabasesPollingResult: AsyncPollingResult = {
  schema: [{ name: 'namespace', type: 'string' }],
  datarows: [['Database1'], ['Database2']],
};

export const mockShowTablesPollingResult: AsyncPollingResult = {
  schema: [
    { name: 'namespace', type: 'string' },
    { name: 'tableName', type: 'string' },
    { name: 'isTemporary', type: 'boolean' },
  ],
  datarows: [
    ['TestDatabase', 'Table1', false],
    ['TestDatabase', 'Table2', false],
  ],
};

export const mockShowIndexesPollingResult: AsyncPollingResult = {
  schema: [
    { name: 'flint_index_name', type: 'string' },
    { name: 'kind', type: 'string' },
    { name: 'database', type: 'string' },
    { name: 'table', type: 'string' },
    { name: 'index_name', type: 'string' },
    { name: 'auto_refresh', type: 'boolean' },
    { name: 'status', type: 'string' },
  ],
  datarows: [
    [
      'flint_mys3_default_http_logs_skipping_index',
      'skipping',
      'default',
      'http_logs',
      'skipping_index',
      false,
      'Active',
    ],
    [
      'flint_mys3_default_http_logs_status_clientip_and_day_index',
      'covering',
      'default',
      'http_logs',
      'status_clientip_and_day',
      true,
      'Active',
    ],
    ['flint_mys3_default_http_count_view', 'mv', 'default', '', 'http_count_view', true, 'Active'],
  ],
};
