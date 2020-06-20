netlify.toml

[[plugins]]
package = "@netlify/plugin-lighthouse"
  [plugins.inputs]
  # optional, defaults to scanning the current built version of the site
  audit_url = 'https://www.willemvanduijn.dev'
  # optional, fails build when a category is below a threshold
  [plugins.inputs.thresholds]
    performance = 0.9
    accessibility = 0.9
    best-practices = 0.9
    seo = 0.9
    pwa = 0.9