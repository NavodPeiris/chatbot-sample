export type ContextKey = 'Electric & Magnetic Fields' | 'Gravitational Fields' | 'Laws of Motion' | 'other' | 'Proteins' | 'Stem Cells';

export const CONTEXTS: Record<ContextKey, string> = {
  'other': '',

  'Electric & Magnetic Fields': `
#### Electric & Magnetic Fields

**3.1 Electric Fields in a Conductor**

*   **Ideal Conductor:**
    *   Forms an equipotential volume: The electric potential is the same at all points within and on the surface of an ideal conductor in electrostatic equilibrium.
    *   Electric field within is zero: Any excess charge resides on the surface. If there were a field inside, charges would move to cancel it.
*   **Charge Accumulation:** Electric charge accumulates on the surfaces of a conductor.
*   **Electric Field at Surface:** The electric field at the surface of a conductor is always normal (perpendicular) to the surface. If it had a tangential component, charges would move along the surface, violating electrostatic equilibrium.

**3.2 Gauss's Law for Electric and Magnetic Fields**

*   **Gauss's Law for Electric Fields:** The total electric flux through any closed surface (Gaussian surface) is proportional to the total electric charge enclosed within that surface.
    *   $$\Phi_E = \oint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{enclosed}}{\epsilon_0}$$
    *   **Application:** Solving problems involving symmetric charge distributions (e.g., spheres, cylinders, infinite planes) by relating electric flux to enclosed charge.
        *   **Example (Electric Field of a Point Charge):** For a spherical Gaussian surface of radius $$r$$ enclosing a point charge $$Q$$ at its center:
            $$\oint E dA = E \oint dA = E(4\pi r^2)$$
            $$E(4\pi r^2) = \frac{Q}{\epsilon_0} \implies E = \frac{Q}{4\pi\epsilon_0 r^2}$$
*   **Gauss's Law for Magnetic Fields:** The total magnetic flux through any closed surface is always zero.
    *   $$\Phi_B = \oint \mathbf{B} \cdot d\mathbf{A} = 0$$
    *   **Implication:** This law suggests the non-existence of magnetic monopoles. Magnetic field lines always form closed loops, meaning they have no beginning or end.

**3.3 Ampere's Law for Magnetic Fields**

*   **Ampere's Law:** The line integral of the magnetic field around any closed loop (Amperian loop) is proportional to the total electric current enclosed by that loop.
    *   $$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{enclosed}$$
    *   Where $$\mu_0$$ is the permeability of free space ($4\pi \times 10^{-7} \text{ H m}^{-1}$).
    *   **Application:** Solving problems involving symmetric current configurations (e.g., long straight wires, solenoids, toroids) to find the magnetic field.
        *   **Example (Magnetic Field of a Long Straight Wire):** For a circular Amperian loop of radius $$r$$ around a long straight current-carrying wire:
            $$\oint B dl = B \oint dl = B(2\pi r)$$
            $$B(2\pi r) = \mu_0 I \implies B = \frac{\mu_0 I}{2\pi r}$$

**3.4 Electric and Magnetic Dipoles**

*   **Electric Dipole:** Consists of two equal and opposite charges ($+q$$ and $$-q$$) separated by a small distance $$d$$.
    *   **Electric Dipole Moment ($p$ or $$\mathbf{p}$$):** A vector quantity defined as the product of the charge magnitude and the separation distance, pointing from the negative to the positive charge.
        *   $$p = qd$$
        *   Units: C m.
    *   **Torque on an Electric Dipole in an External Electric Field ($\mathbf{E}$):**
        *   $$\tau = pE\sin\theta$$ or $$\mathbf{\tau} = \mathbf{p} \times \mathbf{E}$$
        *   Where $$\theta$$ is the angle between $$\mathbf{p}$$ and $$\mathbf{E}$$. The torque tends to align the dipole with the field.
    *   **Potential Energy of an Electric Dipole in an External Electric Field:**
        *   $$U = -pE\cos\theta$$ or $$U = -\mathbf{p} \cdot \mathbf{E}$$
        *   Minimum energy when aligned with the field ($$\theta=0$$), maximum energy when anti-aligned ($$\theta=180^\circ$$).
*   **Magnetic Dipole:** A current loop or a permanent magnet has a magnetic dipole moment.
    *   **Magnetic Dipole Moment ($\mu$ or $$\mathbf{m}$$):** For a current loop, it is the product of the current and the area of the loop.
        *   $$\mu = IA$$
        *   Units: A m$$^2$$.
    *   **Torque on a Magnetic Dipole in an External Magnetic Field ($\mathbf{B}$):**
        *   $$\tau = \mu B\sin\theta$$ or $$\mathbf{\tau} = \mathbf{\mu} \times \mathbf{B}$$
        *   Where $$\theta$$ is the angle between $$\mathbf{\mu}$$ and $$\mathbf{B}$$.
    *   **Potential Energy of a Magnetic Dipole in an External Magnetic Field:**
        *   $$U = -\mu B\cos\theta$$ or $$U = -\mathbf{\mu} \cdot \mathbf{B}$$
*   **Analogy and Monopoles:** Electric and magnetic dipoles behave analogously in external fields. However, magnetic monopoles (isolated north or south poles) have not been observed, which is consistent with Gauss's law for magnetism.
`,

  'Gravitational Fields': `
#### 8. Gravitational Fields

**8.1 Newton's Law of Gravitation**

*   **Statement:** Every particle in the Universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.
    *   $$F = \frac{GM_1M_2}{r^2}$$
    *   Where $$G$$ is the universal gravitational constant ($$6.67 \times 10^{-11} \text{ N m}^2 \text{ kg}^{-2}$$), $$M_1$$ and $$M_2$$ are the masses, and $$r$$ is the distance between their centers.

**8.2 Gravitational Field Strength**

*   **Definition:** Gravitational field strength ($g$) at a point is the gravitational force per unit mass exerted on a small test mass placed at that point.
    *   $$g = \frac{F}{m}$$
*   **For a Point Mass:**
    *   $$g = \frac{GM}{r^2}$$
    *   Where $$M$$ is the mass creating the field and $$r$$ is the distance from its center.
*   **Near Earth's Surface:** Gravitational field strength is approximately constant and equal to the acceleration of free fall ($$g \approx 9.81 \text{ N kg}^{-1}$$ or $$9.81 \text{ m s}^{-2}$$).

**8.3 Gravitational Potential and Energy**

*   **Gravitational Potential ($\phi$):** The work done per unit mass by an external force in bringing a small test mass from infinity to that point in a gravitational field. It is a scalar quantity.
    *   $$\phi = -\frac{GM}{r}$$
    *   The negative sign indicates that gravity is an attractive force, and potential energy decreases as masses get closer. Potential is defined as zero at infinity.
    *   Units: J kg$$^{-1}$$.
*   **Gravitational Potential Energy ($E_p$):** The energy of a system of two point masses due to their gravitational attraction.
    *   $$E_p = m\phi = -\frac{GMm}{r}$$
*   **Relationship between Field Strength and Potential:** Gravitational field strength is equal to the negative potential gradient.
    *   $$g = -\frac{d\phi}{dr}$$
    *   This means the field points in the direction of decreasing potential.

**8.4 Escape Velocity and Circular Orbits**

*   **Escape Velocity ($v_{esc}$):** The minimum speed an object needs to escape the gravitational pull of a massive body and move infinitely far away, without further propulsion.
    *   Consider energy conservation: Initial KE + Initial GPE = Final KE + Final GPE.
    *   To escape, final KE = 0 and final GPE = 0 (at infinity).
    *   $$\frac{1}{2}mv_{esc}^2 + \left(-\frac{GMm}{R}\right) = 0 + 0$$
    *   $$\frac{1}{2}mv_{esc}^2 = \frac{GMm}{R}$$
    *   $$v_{esc} = \sqrt{\frac{2GM}{R}}$$
    *   Where $$M$$ is the mass of the planet and $$R$$ is the radius from its center.
*   **Circular Orbits in Inverse Square Law Fields:** For a satellite in a circular orbit around a planet, the gravitational force provides the centripetal force.
    *   $$\frac{GMm}{r^2} = \frac{mv^2}{r}$$
    *   $$v = \sqrt{\frac{GM}{r}}$$ (orbital speed)
    *   $$T = \frac{2\pi r}{v} = 2\pi r \sqrt{\frac{r}{GM}}$$ (orbital period)
    *   $$T^2 = \left(\frac{4\pi^2}{GM}\right)r^3$$ (Kepler's Third Law)
*   **Geostationary Orbit:** A circular orbit directly above the Earth's equator that has a period equal to the Earth's rotational period (24 hours). A satellite in this orbit appears stationary from the ground.
    *   Requires a specific orbital radius. Using Kepler's Third Law with $$T = 24 \text{ hours}$$ and Earth's mass $$M_E$$:
        $$r^3 = \frac{GMT^2}{4\pi^2}$$
        $$r = \sqrt[3]{\frac{(6.67 \times 10^{-11})(5.97 \times 10^{24})(24 \times 3600)^2}{4\pi^2}} \approx 4.22 \times 10^7 \text{ m}$$ (from Earth's center)
    *   Applications: Communications, weather monitoring.  
`,

  'Laws of Motion': `
**3.4 Laws of Motion**

*   **Newton's First Law (Law of Inertia):** A body at rest will stay at rest, and a body in motion will continue to move at constant velocity, unless acted upon by a resultant external force.
*   **Newton's Second Law:** The rate of change of momentum of a body is directly proportional to the resultant force acting on the body and is in the same direction as the resultant force.
    *   $$\mathbf{F}_{net} = \frac{d\mathbf{p}}{dt}$$
    *   For a body of constant mass: $$\mathbf{F}_{net} = m\mathbf{a}$$
    *   **Example:** A 2 kg object experiences a net force of $$10 \text{ N}$$. What is its acceleration?
        $$a = F/m = 10 \text{ N} / 2 \text{ kg} = 5 \text{ m/s}^2$$
*   **Newton's Third Law:** When one body exerts a force on a second body, the second body simultaneously exerts a force equal in magnitude and opposite in direction on the first body. These forces act on *different* bodies.
    *   Example: A book on a table. The book exerts a downward force (weight) on the table, and the table exerts an upward normal force on the book.

`,

  'Proteins': `
#### C. Proteins

**Protein Structure:**
Proteins are complex macromolecules with diverse roles, and their function is intricately linked to their specific three-dimensional structure.

*   **Primary Structure:** The unique linear sequence of amino acids in a polypeptide chain. This sequence is determined by the genetic code.
*   **Secondary Structure:** Localized, repetitive folding patterns of the polypeptide chain, primarily stabilized by hydrogen bonds between the backbone atoms (not R-groups).
    *   **Alpha (α)-helix:** A coiled structure resembling a spring, formed by hydrogen bonds between every fourth amino acid.
    *   **Beta (β)-pleated sheet:** A folded, accordion-like structure formed by hydrogen bonds between parallel or anti-parallel segments of the polypeptide chain.
*   **Tertiary Structure:** The overall three-dimensional shape of a single polypeptide chain, resulting from interactions between the R-groups of amino acids. These interactions include:
    *   **Hydrogen bonds:** Between polar R-groups.
    *   **Ionic bonds:** Between oppositely charged R-groups (acidic and basic).
    *   **Disulfide bonds:** Strong covalent bonds formed between the sulfhydryl groups of two cysteine residues ($$-S-S-$$).
    *   **Hydrophobic interactions:** Nonpolar R-groups tend to cluster in the interior of the protein, away from water, driven by the hydrophobic effect.
    *   **Van der Waals interactions:** Weak, transient attractions between adjacent nonpolar R-groups.
*   **Quaternary Structure:** The overall three-dimensional structure formed by the association of two or more polypeptide subunits (each with its own tertiary structure) into a functional protein complex. (e.g., hemoglobin).

**Effects of Temperature and pH on Protein Structure:**
*   **Temperature:**
    *   **Increase:** Increased kinetic energy of atoms, causing vibrations that disrupt the weak bonds (hydrogen, ionic, hydrophobic interactions) maintaining secondary, tertiary, and quaternary structures.
    *   **Denaturation:** Beyond an optimal temperature, the protein loses its specific 3D shape, leading to loss of function. This is often irreversible.
    *   **Decrease:** Reduced kinetic energy, leading to decreased enzyme activity but usually no permanent denaturation.
*   **pH:**
    *   **Deviation from optimum pH:** Changes in pH alter the charges of acidic and basic R-groups (due to protonation or deprotonation).
    *   **Disruption of ionic and hydrogen bonds:** This disrupts the specific interactions holding the tertiary and quaternary structures, leading to denaturation and loss of function.

**Molecular Structure and Function of Specific Proteins (H2/H3):**

*   **Haemoglobin (Globular; Transport):**
    *   **Structure:** A globular protein with quaternary structure, composed of four polypeptide subunits (two α-chains and two β-chains). Each subunit contains a heme group with an iron atom that binds oxygen.
    *   **Function:** Transports oxygen from the lungs to the tissues and carbon dioxide from the tissues to the lungs. Its globular shape allows it to be soluble in blood plasma. The cooperative binding of oxygen to its four subunits enhances its efficiency as an oxygen carrier.
*   **Collagen (Fibrous; Structural):**
    *   **Structure:** A fibrous protein with a triple helix (quaternary-like structure, but often described as a superhelix formed from three α-chains). Each α-chain is a helix, and three such helices wound around each other. High proportion of glycine, proline, and hydroxyproline.
    *   **Function:** Provides tensile strength and structural support to connective tissues (skin, bones, tendons, cartilage). Its long, rigid, insoluble triple helical structure allows it to form strong fibers.

**Enzyme Mode of Action:**
Enzymes are biological catalysts, typically proteins, that speed up biochemical reactions without being consumed.

*   **Active Site:** A specific region on the enzyme, usually a cleft or pocket, that binds to the substrate(s). Its shape and chemical properties are complementary to the substrate.
*   **Enzyme-Substrate Complex:** The temporary complex formed when the substrate binds to the active site of the enzyme.
*   **Lowering Activation Energy:** Enzymes lower the activation energy of a reaction by:
    *   Orienting substrates correctly.
    *   Straining substrate bonds.
    *   Providing a favorable microenvironment.
    *   Covalently bonding to the substrate (temporarily).
*   **Enzyme Specificity:** Each enzyme typically catalyzes only one or a very small number of reactions due to the precise complementary fit between the active site and the substrate.
*   **Hypotheses:**
    *   **Lock-and-Key Hypothesis:** Proposed by Emil Fischer, suggests that the active site has a rigid shape perfectly complementary to the substrate, like a key fitting into a lock.
    *   **Induced-Fit Hypothesis:** Proposed by Daniel Koshland, suggests that the active site is flexible and undergoes a slight conformational change upon substrate binding, optimizing the fit and enhancing catalysis. This is the more widely accepted model.

**Factors Affecting Enzyme-Catalysed Reactions:**

*   **Temperature:**
    *   **Increase:** Initially increases reaction rate as kinetic energy of enzyme and substrate molecules increases, leading to more frequent collisions.
    *   **Optimum temperature:** The temperature at which the enzyme exhibits maximum activity.
    *   **Denaturation:** Above the optimum, the enzyme's 3D structure (active site shape) is irreversibly altered, leading to a rapid decrease in activity.
*   **pH:**
    *   **Optimum pH:** The pH at which the enzyme exhibits maximum activity.
    *   **Deviation from optimum:** Changes in pH alter the ionization state of amino acid R-groups in the active site, disrupting ionic and hydrogen bonds, leading to changes in active site shape and denaturation.
*   **Enzyme Concentration:**
    *   **Increase:** With a saturating amount of substrate, increasing enzyme concentration directly increases the reaction rate, as more active sites are available to bind to substrates.
    *   **Relationship:** Rate is directly proportional to enzyme concentration.
*   **Substrate Concentration:**
    *   **Increase (low concentration):** Increases reaction rate as more substrate molecules are available to bind to active sites.
    *   **Saturation:** At high substrate concentrations, all active sites become saturated with substrate, and the reaction rate reaches a maximum ($$V_{max}$$). Further increases in substrate concentration will not increase the rate.

**Competitive and Non-competitive Inhibitors (H2/H3):**

*   **Competitive Inhibitor:**
    *   **Structure:** Molecule similar in shape to the substrate, allowing it to bind reversibly to the enzyme's active site.
    *   **Binding Site:** Active site.
    *   **Effect on Rate:** Reduces the rate of reaction by competing with the substrate for active site binding. Can be overcome by increasing substrate concentration. Does not change $$V_{max}$$, but increases $$K_m$$.
*   **Non-competitive Inhibitor:**
    *   **Structure:** Molecule that binds to an allosteric site (a site other than the active site) on the enzyme.
    *   **Binding Site:** Allosteric site.
    *   **Effect on Rate:** Causes a conformational change in the enzyme, altering the active site and reducing its catalytic efficiency. Cannot be overcome by increasing substrate concentration. Decreases $$V_{max}$$, but does not change $$K_m$$.
    *   **Allosteric Inhibitors:** A type of non-competitive inhibitor that binds to an allosteric site, often involved in feedback regulation, to switch enzyme activity on or off.

`,
  
  'Stem Cells': `
#### D. Stem Cells

**Unique Features of Stem Cells:**
Stem cells are undifferentiated cells with the remarkable ability to divide and differentiate into various specialized cell types.

*   **Totipotency (e.g., Zygotic Stem Cells):**
    *   **Explanation:** The ability of a single cell to differentiate into all cell types, including embryonic and extraembryonic tissues (like the placenta).
    *   **Example:** A zygote (fertilized egg) and the first few cells after cleavage are totipotent, capable of forming an entire organism.
*   **Pluripotency (e.g., Embryonic Stem Cells):**
    *   **Explanation:** The ability of a single cell to differentiate into all cell types that make up the organism, but not extraembryonic tissues.
    *   **Example:** Cells from the inner cell mass of a blastocyst are pluripotent.
*   **Multipotency (e.g., Blood Stem Cells, Lymphoid and Myeloid Stem Cells - H2/H3):**
    *   **Explanation:** The ability of a single cell to differentiate into a limited number of specialized cell types within a particular lineage or tissue.
    *   **Example:** Hematopoietic stem cells (blood stem cells) in bone marrow can differentiate into all types of blood cells (red blood cells, white blood cells, platelets).
        *   **Lymphoid stem cells:** Give rise to lymphocytes (T cells, B cells, NK cells).
        *   **Myeloid stem cells:** Give rise to other blood cells like erythrocytes, granulocytes, monocytes, and megakaryocytes.

**Normal Functions of Stem Cells in a Living Organism:**

*   **Growth and Development:** Embryonic stem cells (pluripotent) are crucial for the development of an entire organism from a single-cell zygote, undergoing extensive division and differentiation to form all tissues and organs.
*   **Tissue Repair and Regeneration:** Adult stem cells (multipotent) are responsible for replacing damaged or dead cells throughout an organism's life, maintaining tissue homeostasis.
    *   **Example:** Blood stem cells continuously replenish various blood cell types, which have short lifespans. Skin stem cells replace epidermal cells that are shed.
*   **Homeostasis:** Stem cells ensure the continuous self-renewal of tissues with high turnover rates, such as the skin, gut lining, and blood.
`
};