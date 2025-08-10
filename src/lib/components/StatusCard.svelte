<script>
  import { CheckCircle, AlertCircle, XCircle } from 'lucide-svelte';
  
  export let service;
  export let status;
  export let uptime;
  export let endpoint;
  
  function getStatusIcon(status) {
    switch(status.toLowerCase()) {
      case 'operational': return CheckCircle;
      case 'degraded': return AlertCircle;
      case 'down': return XCircle;
      default: return CheckCircle;
    }
  }
  
  function getStatusColor(status) {
    switch(status.toLowerCase()) {
      case 'operational': return 'text-green-500';
      case 'degraded': return 'text-yellow-500';
      case 'down': return 'text-red-500';
      default: return 'text-green-500';
    }
  }
</script>

<div class="bg-white p-4 rounded-lg border">
  <div class="flex items-center gap-2 mb-2">
    <svelte:component this={getStatusIcon(status)} class="h-4 w-4 {getStatusColor(status)}" />
    <span class="font-medium text-sm">{service}</span>
  </div>
  <div class="text-xs text-gray-600 space-y-1">
    <div>Status: <span class="{getStatusColor(status)}">{status}</span></div>
    <div>Uptime: {uptime}</div>
    <div class="font-mono">{endpoint}</div>
  </div>
</div>
