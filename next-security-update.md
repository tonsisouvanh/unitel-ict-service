````markdown
## Security Advisory: React Server Components (RSC)

Two additional vulnerabilities have been identified in the **React Server Components (RSC)** protocol. These issues were discovered while security researchers examined the patches for **React2Shell**.

- Neither issue allows **Remote Code Execution (RCE)**
- The existing **React2Shell patch remains fully effective**

These vulnerabilities originate in the upstream React implementation:

- **CVE-2025-55183**
- **CVE-2025-55184**

This advisory tracks the **downstream impact on Next.js applications using the App Router**.  
For full technical details, see the official React blog post.

---

### ⚠️ Addendum

The initial fix for **CVE-2025-55184** was **incomplete**.  
A **complete fix** has been issued under **CVE-2025-67779**.

> If you previously upgraded to one of the initially recommended versions, **you must upgrade again** to the latest patched versions listed below.

---

## Impact

### 🚨 Denial of Service (High Severity)

**CVE-2025-55184 / CVE-2025-67779**

A specially crafted HTTP request sent to any **App Router endpoint** can cause an **infinite loop during deserialization**, hanging the server process and preventing future requests from being served.

> **Note:** The initial fix was incomplete. The final fix is tracked under **CVE-2025-67779**.

---

### 🔍 Source Code Exposure (Medium Severity)

**CVE-2025-55183**

A specially crafted HTTP request can cause a **Server Function** to return the **compiled source code of other Server Functions** in your application.

This may expose:

- Business logic
- Secrets defined directly in code (not via environment variables)
- Inlined values depending on bundler configuration

---

## Affected and Fixed Next.js Versions

Applications using **React Server Components with the App Router** are affected.

| Version     | DoS (55184) | Source Exposure (55183) | Fixed In               |
| ----------- | ----------- | ----------------------- | ---------------------- |
| >= 13.3     | ✓           | —                       | Upgrade to **14.2.35** |
| 14.x        | ✓           | —                       | **14.2.35**            |
| 15.0.x      | ✓           | ✓                       | **15.0.7**             |
| 15.1.x      | ✓           | ✓                       | **15.1.11**            |
| 15.2.x      | ✓           | ✓                       | **15.2.8**             |
| 15.3.x      | ✓           | ✓                       | **15.3.8**             |
| 15.4.x      | ✓           | ✓                       | **15.4.10**            |
| 15.5.x      | ✓           | ✓                       | **15.5.9**             |
| 15.x canary | ✓           | ✓                       | **15.6.0-canary.60**   |
| 16.0.x      | ✓           | ✓                       | **16.0.10**            |
| 16.x canary | ✓           | ✓                       | **16.1.0-canary.19**   |

> **Pages Router applications are not affected**, but upgrading to a patched version is still recommended.

---

## Required Action

All users **must upgrade** to the latest patched version for their release line.

If you are on:

- **Next.js >= 13.3**
- **14.0.x**
- **14.1.x**

➡️ Upgrade to the latest **14.2.x** release.

---

## Upgrade Commands

### Stable Releases

```bash
npm install next@14.2.35    # for 14.x
npm install next@15.0.7     # for 15.0.x
npm install next@15.1.11    # for 15.1.x
npm install next@15.2.8     # for 15.2.x
npm install next@15.3.8     # for 15.3.x
npm install next@15.4.10    # for 15.4.x
npm install next@15.5.9     # for 15.5.x
npm install next@16.0.10    # for 16.0.x
```
````

### Canary Releases

```bash
npm install next@15.6.0-canary.60   # for 15.x canary
npm install next@16.1.0-canary.19   # for 16.x canary
```

---

## Automated Fix Tool

Run the following command to launch an interactive tool that:

- Checks your current version
- Performs deterministic upgrades to recommended versions

```bash
npx fix-react2shell-next
```

There is **no workaround**.
**Upgrading to a patched version is required.**

---

## Resources

- **CVE-2025-67779** – Complete DoS Fix (React, Next.js)
- **CVE-2025-55184** – Denial of Service (React, Next.js)
- **CVE-2025-55183** – Source Code Exposure (React, Next.js)
- React Blog: _Denial of Service and Source Code Exposure in React Server Components_
- Previous Security Advisory: **CVE-2025-66478**

---

## Discovery

Thanks to **RyotaK (GMO Flatt Security Inc.)** and **Andrew MacPherson** for responsibly discovering and disclosing these vulnerabilities.

> Technical details are intentionally limited to protect developers who have not yet upgraded.

```

```
