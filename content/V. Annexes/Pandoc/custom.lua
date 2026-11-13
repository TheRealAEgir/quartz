-- autofit.lua
function Table(t)
  local colspecs = t.colspecs
  for i, spec in ipairs(colspecs) do
    colspecs[i] = {spec[1], 0}  -- alignment kept, width 0 = auto
  end
  t.colspecs = colspecs
  return t
end