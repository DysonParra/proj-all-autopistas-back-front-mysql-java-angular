/*
 * @fileoverview    {ComparendoRestAssembler} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.ComparendoDTO;
import com.project.dev.api.web.rest.ComparendoRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code ComparendoRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class ComparendoRestAssembler implements RepresentationModelAssembler<ComparendoDTO, EntityModel<ComparendoDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<ComparendoDTO> toModel(ComparendoDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ComparendoRest.class).getEntity(String.valueOf(entityDTO.getIntIdComparendo()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ComparendoRest.class).getAllEntities()).withRel("Comparendo"));
    }
}
