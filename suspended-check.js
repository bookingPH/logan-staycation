/**
 * suspended-check.js — shown when a client has been suspended by the master
 * admin (settings/public.suspended === true). Replaces the whole page with
 * a blocking message so guests can't browse or book while suspended.
 */
export function showSuspendedOverlay() {
  document.body.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f4f1ee;font-family:Arial,Helvetica,sans-serif;padding:24px;text-align:center;">
      <div style="max-width:420px;">
        <div style="font-size:48px;margin-bottom:16px;">🚧</div>
        <h1 style="font-size:22px;color:#333;margin-bottom:12px;">This booking site is temporarily unavailable</h1>
        <p style="color:#666;font-size:14px;line-height:1.6;">Please contact the property directly to make a reservation, or check back later.</p>
      </div>
    </div>`;
}
